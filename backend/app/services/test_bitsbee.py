import requests

# 1. Paste your Discord Webhook URL here
DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1576155144033411157/LEMTcNuGxljRGGew92EBEC8JWUsOv4SUZjDu09fReUMWaUwP-oaRrLwIxTrXydbIQsqP"

def send_manager_alert(claim_amount, risk_level):
    print(f"Attempting to send alert for ${claim_amount} claim...")
    
    payload = {
        "content": f"🚨 **High-Value Claim Needs Review** 🚨\nThe AI drafted an appeal for a **${claim_amount}** claim with a **{risk_level}** risk level. Please review immediately in the ExpertOS Dashboard."
    }

    try:
        response = requests.post(DISCORD_WEBHOOK_URL, json=payload)
        
        if response.status_code == 204:
            print("✅ Success! Alert sent. Check your phone.")
        else:
            print(f"❌ Failed. Status code: {response.status_code}")
            
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    send_manager_alert(12000, "High")