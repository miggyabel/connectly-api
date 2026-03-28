



 1. Authentication Testing (Google OAuth)
- **Endpoint:** `POST /api/auth/google/login/`
- **Method:** POST
- **Payload:** `{ "token": "G-OAUTH-TOKEN-12345" }`
- **Status:** `200 OK`
- **Result:** Successfully generated JWT Access and Refresh tokens for the user.

---

 2. User Interactions (Likes & Comments)
- **Endpoint:** `POST /api/posts/10/like/`
- **Status:** `201 Created`
- **Result:** Like successfully recorded. Unique constraint verified (User cannot like twice).

- **Endpoint:** `POST /api/posts/10/comment/`
- **Payload:** `{ "text": "Great update on Milestone 2!" }`
- **Status:** `201 Created`
- **Result:** Comment linked to Post ID 10 and authenticated Author ID.

---

 3. Performance & Pagination (News Feed)
- **Endpoint:** `GET /api/feed/?page=1&limit=10`
- **Status:** `200 OK`
- **Response Structure:**
  ```json
  {
    "count": 45,
    "next": "[http://127.0.0.1:8000/api/feed/?page=2](http://127.0.0.1:8000/api/feed/?page=2)",
    "previous": null,
    "results": [...]
  }
        ]
    }
    ```
