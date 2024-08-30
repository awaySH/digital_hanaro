def register(username, password):
    # 사용자 등록 로직 구현
    if username in get_all_users():
        return "User already exists"
    save_user_to_db(username, hash_password(password))
    return "User registered successfully"

def save_user_to_db(username, password):
    # 데이터베이스에 사용자 정보 저장 (예시)
    print(f"User {username} saved with password {password}")

def get_all_users():
    # 데이터베이스에서 모든 사용자 가져오기 (예시)
    return ["user1", "user2"]
