from sawtooth_sdk.processor.handler import TransactionHandler
from sawtooth_sdk.processor.exceptions import InternalError
from simple_supply_addressing import addresser
class SimpleSupplyHandler(TransactionHandler):
    @property
    def family_name(self):
        return addresser.FAMILY_NAME
    @property
    def family_versions(self):
        return ['0.0']
    @property
    def namespaces(self):
        return [addresser.NAMESPACE]
    def apply(self, transaction, context):
        raise InternalError('Not implemented')