import logging
import shutil
import paths
import os.path as op
import util

from Progress import Progress
from Experiment import Experiment
from NativeExperiment import NativeExperiment
from WebExperiment import WebExperiment

logger = logging.getLogger('ExperimentFactory')


class ExperimentFactory(object):
    def __init__(self):
        pass

    @staticmethod
    def from_json(path):
        """Returns an Experiment object from a JSON configuration"""
        logger.info(path)
        shutil.copy(path, op.join(paths.OUTPUT_DIR, 'config.json'))
        config = util.load_json(path)
        progress = Progress(config, path)
        experiment_type = config['type']
        if experiment_type == 'native':
            return NativeExperiment(config, progress)
        elif experiment_type == 'web':
            return WebExperiment(config, progress)
        else:
            return Experiment(config, progress)
