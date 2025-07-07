import os
from fastapi import FastAPI, Form, HTTPException, status, Depends # <-- Added Depends here
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy.exc import SQLAlchemyError
from pydantic import BaseModel # For request body validation

# --- Database Setup (SQLite) ---
DATABASE_URL = "sqlite:///./reviews.db" # SQLite database file

engine = create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False} # Needed for SQLite
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Define the Review model (matches your desired review structure)
class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    reviewer_name = Column(String, index=True)
    review_text = Column(String)
    rating = Column(Integer) # Assuming rating is an integer (e.g., 1-5)
    timestamp = Column(DateTime, default=datetime.now)

# Create database tables
Base.metadata.create_all(bind=engine)

# Pydantic model for incoming review data (for POST request validation)
class ReviewCreate(BaseModel):
    reviewer_name: str
    review_text: str
    rating: int # Expecting an integer rating

# --- FastAPI App Setup ---
app = FastAPI(
    title="Acadova Landing Page Backend (Local with SQLite)",
    description="Local API for handling contact form submissions and dynamic reviews.",
    version="0.1.0"
)

# Configure CORS (Cross-Origin Resource Sharing)
origins = [
    "http://localhost",
    "http://localhost:3000",  # Your React frontend's address
    "http://127.0.0.1:3000",
    # Add your deployed frontend domain here when you deploy
    # e.g., "https://your-landing-page-domain.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get a database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- API Endpoints ---

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Acadova Landing Page Backend API (Local with SQLite)!"}

@app.post("/contact")
async def submit_contact_form(
    name: str = Form(...),
    email: str = Form(...),
    subject: str = Form(...),
    message: str = Form(...)
):
    """
    Receives contact form submissions and prints them to console (no database).
    """
    try:
        submission_data = {
            "name": name,
            "email": email,
            "subject": subject,
            "message": message,
            "timestamp": datetime.now().isoformat()
        }
        
        print("\n--- NEW CONTACT FORM SUBMISSION ---")
        print(f"Name: {submission_data['name']}")
        print(f"Email: {submission_data['email']}")
        print(f"Subject: {submission_data['subject']}")
        print(f"Message: {submission_data['message']}")
        print(f"Timestamp: {submission_data['timestamp']}")
        print("-----------------------------------\n")
        
        return {"message": "Contact form received successfully (local)!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process form: {str(e)}")

@app.post("/reviews", status_code=status.HTTP_201_CREATED)
async def create_review(review: ReviewCreate, db: SessionLocal = Depends(get_db)):
    """
    Receives and stores a new customer review in the SQLite database.
    """
    try:
        db_review = Review(
            reviewer_name=review.reviewer_name,
            review_text=review.review_text,
            rating=review.rating
        )
        db.add(db_review)
        db.commit()
        db.refresh(db_review) # Refresh to get the generated ID and timestamp
        
        print(f"\n--- NEW REVIEW SUBMITTED ---")
        print(f"ID: {db_review.id}, Name: {db_review.reviewer_name}")
        print(f"Text: {db_review.review_text}, Rating: {db_review.rating}")
        print("----------------------------\n")
        
        return {"message": "Review submitted successfully!", "id": db_review.id}
    except SQLAlchemyError as e:
        db.rollback() # Rollback changes if an error occurs
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit review: {str(e)}")

@app.get("/reviews")
async def get_customer_reviews(db: SessionLocal = Depends(get_db)):
    """
    Retrieves all customer reviews from the SQLite database.
    """
    try:
        reviews = db.query(Review).all()
        # Convert SQLAlchemy objects to dictionaries for JSON response
        return [
            {
                "id": review.id,
                "reviewer_name": review.reviewer_name,
                "review_text": review.review_text,
                "rating": review.rating
            }
            for review in reviews
        ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve reviews: {str(e)}")