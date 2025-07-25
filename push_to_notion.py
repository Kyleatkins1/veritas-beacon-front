import os
import requests
import json
from datetime import datetime

with open("summary.txt", "r") as f:
    summary = f.read().strip()

notion_url = "https://api.notion.com/v1/pages"
headers = {
    "Authorization": f"Bearer {os.environ['NOTION_API_KEY']}",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28"
}

data = {
    "parent": { "database_id": os.environ['NOTION_DATABASE_ID'] },
    "properties": {
        "Project": {
            "title": [{ "text": { "content": os.environ.get('GITHUB_REPOSITORY', 'Unknown Project') } }]
        },
        "Date": {
            "date": { "start": datetime.now().isoformat() }
        },
        "Summary": {
            "rich_text": [{ "text": { "content": summary[:1900] } }]
        }
    }
}

response = requests.post(notion_url, headers=headers, data=json.dumps(data))
print("Notion Response:", response.status_code, response.text)
