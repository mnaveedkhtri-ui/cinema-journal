import json
import urllib.request

host = "cinema-journal.vercel.app"
key = "4b8f2d6e1a9c307e85f412d96ab301ec"
key_location = f"https://{host}/{key}.txt"

urls = [
    f"https://{host}/",
    f"https://{host}/blog",
    f"https://{host}/guide",
    f"https://{host}/route",
    f"https://{host}/blog/what-is-slow-cinema",
    f"https://{host}/blog/andrei-tarkovsky-sculpting-in-time",
    f"https://{host}/blog/the-best-slow-burn-movies-and-why-we-return-to-them",
    f"https://{host}/blog/the-long-take",
    f"https://{host}/blog/film-essays",
    f"https://{host}/blog/shutter-island-ending-explained",
    f"https://{host}/blog/movies-like-shutter-island",
    f"https://{host}/blog/inception-ending-explained",
    f"https://{host}/blog/movies-like-inception"
]

payload = {
    "host": host,
    "key": key,
    "keyLocation": key_location,
    "urlList": urls
}

data = json.dumps(payload).encode('utf-8')

endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow"
]

for endpoint in endpoints:
    try:
        req = urllib.request.Request(
            endpoint,
            data=data,
            headers={
                "Content-Type": "application/json; charset=utf-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
            }
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f"IndexNow [{endpoint}] status: {resp.status} {resp.reason}")
    except Exception as e:
        print(f"IndexNow [{endpoint}] response: {e}")
