from aiohttp.web import HTTPNotImplemented
class RouteHandler(object):
    def __init__(self, loop, validator_connection, database):
        self._loop = loop
        self._validator_connection = validator_connection
        self._database = database
    async def authorize(self, request):
        raise HTTPNotImplemented()
    async def create_agent(self, request):
        raise HTTPNotImplemented()
    async def list_agents(self, request):
        raise HTTPNotImplemented()
    async def fetch_agent(self, request):
        raise HTTPNotImplemented()
    async def create_record(self, request):
        raise HTTPNotImplemented()
    async def list_records(self, request):
        raise HTTPNotImplemented()
    async def fetch_record(self, request):
        raise HTTPNotImplemented()
    async def transfer_record(self, request):
        raise HTTPNotImplemented()
    async def update_record(self, request):
        raise HTTPNotImplemented()