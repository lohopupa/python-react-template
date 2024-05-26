from fastapi import APIRouter

router = APIRouter(prefix="/api")

@router.get("/hello-world")
def query():
    return {"result": "Hello World!"}