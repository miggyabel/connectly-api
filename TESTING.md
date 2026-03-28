




Endpoint: `POST /api/auth/google/login/`
```json
{
  "status": "200 OK",
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "ref_882910222",
    "user": "miggy_abel"
  }
}        ]
    }
    ```
Endpoint: POST /api/posts/42/comment/
{
  "status": "201 Created",
  "data": {
    "id": 105,
    "post_id": 42,
    "author": "miggy_abel",
    "text": "Implementation of Milestone 2 features is successful.",
    "created_at": "2026-03-29T08:45:00Z"
  }
}
Endpoint: GET /api/feed/?page=1
{
  "status": "200 OK",
  "count": 150,
  "next": "[http://127.0.0.1:8000/api/feed/?page=2](http://127.0.0.1:8000/api/feed/?page=2)",
  "previous": null,
  "results": [
    { "id": 50, "author": "dev_team", "content": "Latest update..." },
    { "id": 49, "author": "admin", "content": "Welcome to Connectly!" }
  ]
}
Endpoint: DELETE /api/posts/10/
{
  "status": "403 Forbidden",
  "error": "Permission Denied",
  "message": "You do not have the 'Author' role to perform this action."
}
