#!/usr/bin/env python3
"""
server.py - KremFest XR Public Static Preview Server (v0.1.56)
Serves the clean, pure public static web application (HTML5/CSS3/JS) on Port 3039.
Simulates the exact production deployment environment for GitHub Pages (https://wulfdesign.github.io/kremfest-xr/).
"""

import sys
import os
import http.server
import socketserver
import webbrowser

# Ensure UTF-8 output encoding in Windows shells
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')

PORT = 3039

class PublicStaticServer(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        public_dir = os.path.abspath(os.path.dirname(__file__))
        super().__init__(*args, directory=public_dir, **kwargs)

class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = False  # Strict Winsock isolation on Windows

def run_server():
    no_browser = "--no-browser" in sys.argv or "--no-open" in sys.argv
    try:
        with ThreadingTCPServer(("", PORT), PublicStaticServer) as httpd:
            print(f"===========================================================")
            print(f"🎪 KremFest XR Public Static Preview Server (Port {PORT})")
            print(f"   URL: http://localhost:{PORT}")
            print(f"   Serving: {os.path.abspath(os.path.dirname(__file__))}")
            print(f"===========================================================")
            
            if not no_browser:
                try:
                    webbrowser.open(f"http://localhost:{PORT}")
                except Exception:
                    pass

            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print("\nPublic server stopped.")
    except OSError as e:
        if "10048" in str(e) or "Address already in use" in str(e):
            print(f"⚡ Server already running on port {PORT}. Reusing existing background instance.")
            print(f"   Active URL: http://localhost:{PORT}")
            if not no_browser:
                try:
                    webbrowser.open(f"http://localhost:{PORT}")
                except Exception:
                    pass
        else:
            raise

if __name__ == "__main__":
    run_server()
