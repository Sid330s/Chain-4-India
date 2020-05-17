import hashlib
FAMILY_NAME = 'simple_supply'
NAMESPACE = hashlib.sha512(FAMILY_NAME.encode('utf-8')).hexdigest()[:6]