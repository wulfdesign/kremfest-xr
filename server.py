#!/usr/bin/env python3
"""
server.py - KremFest XR Public Static Preview Server
Serves the clean, pure public static web application (HTML5/CSS3/JS) on Port 3039.
Simulates the exact production deployment environment for GitHub Pages (https://wulfdesign.github.io/kremfest-xr/).
"""

import sys
import os
import http.server
import socketserver
import webbrowser

PORT = 3039

class PublicStaticServer(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Serve from project root directory
        public_dir = os.path.abspath(os.path.dirname(__file__))
        super().__init__(*args, directory=public_dir, **kwargs)

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    print(f"===========================================================")
    print(f"🎪 KremFest XR Public Static Preview Server")
    print(f"   URL: http://localhost:{PORT}")
    print(f"   Serving: {os.path.abspath(os.path.dirname(__file__))}")
    print(f"===========================================================")
    
    # Open browser automatically
    try:
        webbrowser.open(f"http://localhost:{PORT}")
    except Exception:
        pass

    with socketserver.TCPServer(("", PORT), PublicStaticServer) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nPublic server stopped.")

if __name__ == "__main__":
    run_server()
