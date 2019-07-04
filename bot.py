from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

import logging

from rasa_core.agent import Agent
from rasa_core.channels.console import ConsoleInputChannel
from rasa_core.interpreter import RasaNLUInterpreter

logger = logging.getLogger(__name__)

class RestaurantAPI(object):
    def search(self, info):
        return "papi's pizza place"

def run_bot(serve_forever=True):
    agent = Agent.load('./models/dialogue/default/dialogue_model', RasaNLUInterpreter('./models/nlu/default/nlu_model'))

    if serve_forever:
        agent.handle_channel(ConsoleInputChannel())

    return agent
    
if __name__ == '__main__':
    run_bot()





# from __future__ import absolute_import
# from __future__ import division
# from __future__ import print_function
# from __future__ import unicode_literals

# import logging

# from rasa_core.agent import Agent
# from rasa_core.channels.console import ConsoleInputChannel
# from rasa_core.interpreter import RasaNLUInterpreter
# #from ga_connector import GoogleConnector
# #from rasa_core.utils import EndpointConfig


# logger = logging.getLogger(__name__)
# #action_endpoint = EndpointConfig(url="http://localhost:5055/webhook")

# class RestaurantAPI(object):
#     def search(self, info):
#         return "papi's pizza place"


# def run_bot(serve_forever=True):
#     agent = Agent.load('./models/dialogue/default/dialogue_model', RasaNLUInterpreter('./models/nlu/default/nlu_model'))

#     if serve_forever:        
#         input_channel = ConsoleInputChannel()
#         agent.handle_channels([input_channel], 5004)

#     return agent

# if __name__ == '__main__':
#     run_bot()

# import argparse
# import logging

# from policy import RestaurantPolicy
# from rasa_core import utils
# from rasa_core.agent import Agent
# from rasa_core.policies.memoization import MemoizationPolicy

# logger = logging.getLogger(__name__)


# class RestaurantAPI(object):
#     def search(self, info):
#         return "papi's pizza place"


# def train_dialogue(domain_file="restaurant_domain.yml",
#                    model_path="models/dialogue",
#                    training_data_file="data/babi_stories.md"):
#     agent = Agent(domain_file,
#                   policies=[MemoizationPolicy(max_history=3),
#                             RestaurantPolicy(batch_size=100, epochs=400,
#                                              validation_split=0.2)])

#     training_data = agent.load_data(training_data_file)
#     agent.train(
#         training_data
#     )

#     agent.persist(model_path)
#     return agent


# def train_nlu():
#     from rasa_nlu.training_data import load_data
#     from rasa_nlu import config
#     from rasa_nlu.model import Trainer

#     training_data = load_data('data/nlu_data.md')
#     trainer = Trainer(config.load("nlu_model_config.yml"))
#     trainer.train(training_data)
#     model_directory = trainer.persist('models/nlu/',
#                                       fixed_model_name="current")

#     return model_directory


# if __name__ == '__main__':
#     utils.configure_colored_logging(loglevel="INFO")

#     parser = argparse.ArgumentParser(
#         description='starts the bot')

#     parser.add_argument(
#         'task',
#         choices=["train-nlu", "train-dialogue", "run"],
#         help="what the bot should do - e.g. run or train?")
#     task = parser.parse_args().task

#     # decide what to do based on first parameter of the script
#     if task == "train-nlu":
#         train_nlu()
#     elif task == "train-dialogue":
#         train_dialogue()
