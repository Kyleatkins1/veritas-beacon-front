import os
from openai import OpenAI

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

with open("commits.txt", "r") as f:
    commits = f.read()

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {
            "role": "system",
            "content": "You summarize developer commit messages into a clean journal entry."
        },
        {
            "role": "user",
            "content": f"Summarize the following recent commit messages into a dev log:\n{commits}"
        }
    ]
)

print(response.choices[0].message.content.strip())
