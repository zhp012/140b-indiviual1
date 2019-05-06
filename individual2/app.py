from wsgiref.simple_server import make_server
from pyramid.config import Configurator
import time 
from pyramid.response import Response
from pyramid.response import FileResponse
from pyramid.renderers import render_to_response



def main_page(req):
    return FileResponse('cv/index(js).html', request = req)





def main():
    with Configurator() as config:

    
        
        config.add_route('mainpage', '/')
        config.add_view(main_page, route_name='mainpage')


        
        
        

        config.add_static_view(name = '/', path = 'cv', cache_max_age=3600)
        app = config.make_wsgi_app()

    server = make_server('192.168.56.1', 8080, app)

    try:
      server.serve_forever()
    except:
      print("\nExiting...")
      exit(0)

if __name__ == '__main__':
  main()
