def login(username, password):
    # 사용자 인증 로직 구현
    user = get_user_from_db(username)
    if user and user.password == hash_password(password):
        return True
    return False

def get_user_from_db(username):
    # 데이터베이스에서 사용자 정보 가져오기 (예시)
    users = {
        "user1": {"password": "hashed_password1"},
        "user2": {"password": "hashed_password2"}
    }
    return users.get(username)

def hash_password(password):
    # 비밀번호 해시 처리 (예시)
    return "hashed_" + password
