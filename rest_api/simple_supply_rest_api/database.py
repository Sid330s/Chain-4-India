import asyncio
import logging
import aiopg
import psycopg2
LOGGER = logging.getLogger(__name__)
class Database(object):
    """Manages connection to the postgres database and makes async queries
    """
    def __init__(self, host, port, name, user, password, loop):
        self._dsn = 'dbname={} user={} password={} host={} port={}'.format(
            name, user, password, host, port)
        self._loop = loop
        self._conn = None
    async def connect(self, retries=5, initial_delay=1, backoff=2):
        """Initializes a connection to the database
        Args:
            retries (int): Number of times to retry the connection
            initial_delay (int): Number of seconds wait between reconnects
            backoff (int): Multiplies the delay after each retry
        """
        LOGGER.info('Connecting to database')
        delay = initial_delay
        for attempt in range(retries):
            try:
                self._conn = await aiopg.connect(
                    dsn=self._dsn, loop=self._loop, echo=True)
                LOGGER.info('Successfully connected to database')
                return
            except psycopg2.OperationalError:
                LOGGER.debug(
                    'Connection failed.'
                    ' Retrying connection (%s retries remaining)',
                    retries - attempt)
                await asyncio.sleep(delay)
                delay *= backoff
        self._conn = await aiopg.connect(
            dsn=self._dsn, loop=self._loop, echo=True)
        LOGGER.info('Successfully connected to database')
    def disconnect(self):
        """Closes connection to the database
        """
        self._conn.close()