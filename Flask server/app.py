from flask import Flask, abort, send_file, request
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import random
import os
import time

PATH = '/Users/sz/PycharmProjects/websites/'

app = Flask(__name__)


@app.route('/<website>/<preload>/<filename>')
def fetch_file(website: str, preload: str, filename: str):
    return fetch_file_nested(website, preload, None, filename)

@app.route('/<website>/<preload>/<dirname>/<filename>')
def fetch_file_nested(website: str, preload: str, dirname: str, filename: str):
    args = request.args.to_dict()
    latency = args['latency'] if 'latency' in args else None
    latency_fluctuations = args['latency_fluctuations'] if 'latency_fluctuations' in args else None

    if latency and latency.isnumeric():
        latency = float(latency)

    if latency_fluctuations and latency_fluctuations.isnumeric():
        latency_fluctuations = float(latency_fluctuations)

    sleep_time = None
    if latency is not None and latency_fluctuations is None:
        sleep_time = latency
    elif latency is not None and latency_fluctuations is not None:
        sleep_time = random.uniform(latency - latency_fluctuations, latency + latency_fluctuations)

    if sleep_time is not None and type(sleep_time) is float:
        time.sleep(sleep_time)

    if preload not in ['preload', 'no-preload']:
        abort(404, 'The requested URL was not found on the server. If you entered the URL manually please check your '
                   'spelling and try again.')

    if not os.path.exists('%s%s' % (PATH, website)):
        abort(404, 'Directory called %s has not been founded under the provided path (%s). Check if this directory '
                   'exist or if the path is correct.' % (website, PATH))

    if not os.path.exists('%s%s/%s' % (PATH, website, preload)):
        abort(404, 'Directory called %s has not been founded under the provided path (%s). Check if this directory '
                   'exist or if the path is correct.' % (preload, '%s%s/' % (PATH, website)))

    if dirname and dirname is not None:
        if not os.path.exists('%s%s/%s/%s' % (PATH, website, preload, dirname)):
            abort(404, 'Directory called %s has not been founded under the provided path (%s). Check if this directory '
                       'exist or if the path is correct.' % (dirname, '%s%s/%s/%s' % (PATH, website, preload, dirname)))

        if not os.path.isfile('%s%s/%s/%s/%s' % (PATH, website, preload, dirname, filename)):
            abort(404, 'File called %s has not been founded under the provided path (%s). Check if this file exist '
                       'or if the path is correct.' % (filename, '%s%s/%s/%s' % (PATH, website, preload, dirname)))

        return send_file('%s%s/%s/%s/%s' % (PATH, website, preload, dirname, filename))
    else:
        if not os.path.isfile('%s%s/%s/%s' % (PATH, website, preload, filename)):
            abort(404, 'File called %s has not been founded under the provided path (%s). Check if this file exist '
                       'or if the path is correct.' % (filename, '%s%s/%s/' % (PATH, website, preload)))

        return send_file('%s%s/%s/%s' % (PATH, website, preload, filename))


if __name__ == '__main__':
    app.run()
