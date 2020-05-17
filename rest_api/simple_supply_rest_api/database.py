class Database(object):
    """Simple object for managing a connection to a postgres database
    """
    def __init__(self, host, port, name, user, password):
        self._host = host
        self._port = port
        self._name = name
        self._user = user
        self._password = password
        self._conn = None