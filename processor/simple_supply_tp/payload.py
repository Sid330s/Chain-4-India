from simple_supply_protobuf import payload_pb2
class SimpleSupplyPayload(object):
    def __init__(self, payload):
        self._transaction = payload_pb2.SimpleSupplyPayload()
        self._transaction.ParseFromString(payload)
    @property
    def action(self):
        return self._transaction.action
    @property
    def data(self):
        if self._transaction.HasField('create_agent'):
            return self._transaction.create_agent
        if self._transaction.HasField('create_record'):
            return self._transaction.create_record
        if self._transaction.HasField('transfer_record'):
            return self._transaction.transfer_record
        return None
    @property
    def timestamp(self):
        return self._transaction.timestamp