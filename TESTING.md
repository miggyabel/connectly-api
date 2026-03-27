# Connectly API v2 - Milestone 2
**Testing Evidence & Documentation**
**Tester:** Miggy Abel (Individual)
**Date:** March 28, 2024

### 1. User Authentication (Homework 6: Google OAuth)
- **Endpoint:** `POST /api/auth/google/login`
- **User:** `miggy.abel.google@gmail.com`
- **Test Case:** Valid ID Token provided.
- **Result:** **200 OK**
    ```json
    {
        "status": "Success",
        "user_id": 101,
        "username": "miggy_abel",
        "token": "eyJhbGciOiJIUzI1NiIsInR..."
    }
    ```

### 2. Post Interactions (Homework 5: Likes & Comments)
- **Endpoint:** `POST /posts/1/comment`
- **User:** `miggy_abel` (Authenticated)
- **Body:** `{"content": "This is a great update for Milestone 2!"}`
- **Test Case:** User adds a comment to Post #1.
- **Result:** **201 Created**

- **Endpoint:** `POST /posts/2/like`
- **Test Case:** User likes Post #2 for the first time.
- **Result:** **201 Created**

### 3. News Feed (Homework 7: Sorting & Pagination)
- **Endpoint:** `GET /api/feed?page=1&limit=10`
- **Test Case:** Retrieve the latest posts (Page 1).
- **Result:** **200 OK**
    ```json
    {
        "count": 50,
        "next": "http://localhost:5000/api/feed?page=2",
        "previous": null,
        "results": [
            { "id": 102, "author": "miggy_abel", "content": "Just updated models!", "created_at": "2024-03-28T06:30:00Z" },
            { "id": 101, "author": "juan_dev", "content": "Hello Connectly!", "created_at": "2024-03-28T06:00:00Z" }
        ]
    }
    ```
