# Secure Your iPhone: A Step-by-Step Guide

## What this is

Your iPhone isn't looked after by the company's management system. That system is called MDM. It usually switches on security settings for you. On your phone, nobody has switched them on yet, so you'll do it yourself with this guide.

You don't need to be "good with tech." Every step tells you exactly what to tap. Words in **bold** are the words you'll see on screen. A path like **Settings > General > Software Update** means: open the Settings app, tap **General**, then tap **Software Update**.

This guide is written for **iOS 26**. If your phone still runs **iOS 18**, most steps are the same. Where a menu has a different name on iOS 18, the guide says so.

**How long it takes:** about 45 to 60 minutes for the Must-do part, plus 20 to 30 minutes for the Nice-to-have part. You don't have to do it all at once. Tick things off as you go.

**What to have ready:**

- Your iPhone, charged above 50% or plugged in.
- Wi-Fi.
- Your **Apple Account password**. (This used to be called your Apple ID. It's the email and password you use for the App Store and iCloud.)
- Your **phone carrier login**: the username and password for your mobile provider's website or app (for example, the company you pay your phone bill to). You need it for the SIM PIN step.
- Your phone's **passcode**: the code you type to unlock it.
- About 10 minutes of quiet time for the Apple Account steps.

**Please do the steps in order.** The order matters. For example, you turn on backups before the setting that can wipe the phone, and you finish your Apple Account changes before the setting that adds a one-hour wait to them.

**One thing to know first:** some settings ask for Face ID or your passcode, and some may make you wait an hour. This is a safety feature called Security Delay, explained in step 8. That's normal.

---

## Before you start: update your iPhone

**Why this matters:** Updates fix the security holes that criminals use. An out-of-date phone is the easiest kind to break into.

**Steps**

1. Plug your iPhone into a charger and connect to Wi-Fi.
2. Go to **Settings > General > Software Update**.
3. If you see **Update Now** or **Upgrade to iOS 26**, tap it. Then follow the prompts and enter your passcode.
4. Wait. The phone restarts on its own. This can take 15 to 45 minutes.
5. Go back to **Settings > General > Software Update** and check again, because sometimes a second update shows up.

**How to check it worked:** **Settings > General > Software Update** says **iOS is up to date**. You can also check **Settings > General > About > iOS Version**.

**If you don't see this:** If your phone can't get iOS 26, it may be too old. Install the newest update it offers and tell IT the model, which is shown in **Settings > General > About > Model Name**.

---

## Checklist

Tick each box as you finish.

**Before you start**
- [ ] Update to the latest iOS

**Must-do (everyone)**
- [ ] 1. Turn on all Automatic Updates
- [ ] 2. Turn on backups
- [ ] 3. Use a strong passcode and turn on Erase Data
- [ ] 4. Set Auto-Lock to 5 minutes or less
- [ ] 5. Check Face ID (or Touch ID)
- [ ] 6. Lock down your Apple Account (two-factor, phone numbers, devices, Recovery Contact)
- [ ] 7. Turn on Find My
- [ ] 8. Turn on Stolen Device Protection (set to "Always")
- [ ] 9. Limit what works on the Lock Screen
- [ ] 10. Hide message previews on the Lock Screen
- [ ] 11. Add a SIM PIN, and lock your account with your carrier
- [ ] 12. Set AirDrop to Contacts Only
- [ ] 13. Check for unknown profiles (and install IT's profile, if they send one)
- [ ] 14. Turn on Safari's fraud warning
- [ ] 15. Turn on automatic app updates
- [ ] 16. Never "Trust" an unknown computer
- [ ] 17. Know what to do if your phone is lost

**Nice-to-have**
- [ ] 18. Run Safety Check
- [ ] 19. Review app permissions
- [ ] 20. Check which devices get your texts and calls
- [ ] 21. Make sure call forwarding is off
- [ ] 22. Screen messages from unknown senders
- [ ] 23. Review Safari extensions
- [ ] 24. Tidy up Wi-Fi settings
- [ ] 25. Review Shortcuts automations
- [ ] 26. Check accessibility settings for anything you didn't set up
- [ ] 27. Cut down tracking and ad sharing
- [ ] 28. Delete apps you don't use

**Only if IT tells you to**
- [ ] 29. Lockdown Mode
- [ ] 30. Advanced Data Protection
- [ ] 31. Security keys
- [ ] 32. Contact Key Verification

**Why the split?** The Must-do steps stop the most common problems: a stolen phone, a hacked Apple Account, or a criminal taking over your phone number. The Nice-to-have steps are a tidy-up. They catch rarer problems, like an old app that can still see your location, or a setting someone else turned on. Do them when you can.

---

# Part 1: Must-do (everyone)

## 1. Turn on all Automatic Updates

**Why this matters:** You won't always remember to update. With this on, your phone fixes itself overnight while it charges.

**Steps**

1. Go to **Settings > General > Software Update > Automatic Updates**.
2. Under **iOS Updates**, turn on **Automatically Download** and **Automatically Install**.
3. Turn on **System Files** (the switch may be shown as **Automatically Install** under a **System Files** heading). On iOS 18 this is called **Security Responses & System Files**.
4. Go back to the main Settings screen. Go to **Settings > Privacy & Security > Background Security Improvements** and make sure **Automatically Install** is on. (This is new in iOS 26.1. It sends urgent security fixes between normal updates.)

**How to check it worked:** All the switches above are green.

**If you don't see this:** If there's no **Background Security Improvements** option, your phone is on iOS 26.0 or older. Update it (see "Before you start") and look again.

**Heads-up:** Your phone installs updates overnight and restarts, so leave it on charge and on Wi-Fi now and then. If you add a SIM PIN later (step 11), you'll need to type it after these restarts.

---

## 2. Turn on backups

**Why this matters:** If your phone is lost, stolen, broken, or wiped, a backup gets your photos, messages and apps back onto a new phone. Do this **before** step 3, which can wipe the phone after too many wrong passcodes.

**Steps (iCloud, the easiest way)**

1. Go to **Settings > [your name] > iCloud**.
2. Tap **iCloud Backup**.
3. Turn on **Back Up This iPhone**. (On older versions it's simply called **iCloud Backup**.)
4. Tap **Back Up Now** to make your first backup. Stay on Wi-Fi until it finishes.

**How to check it worked:** Under **Back Up Now**, you see **Last successful backup** with today's date.

**If you don't have enough iCloud storage:** Your phone will say so. You can buy more storage (iCloud+), or back up to your own computer instead:
- When you plug your iPhone into your computer, it asks **Trust This Computer?** Tap **Trust** and enter your passcode. That's fine here, because it's **your own** computer. (Step 16 explains why you shouldn't do this on other computers.)
- **Mac:** plug in the iPhone, open **Finder**, click your iPhone in the sidebar, choose **Back up all of the data on your iPhone to this Mac**, tick **Encrypt local backup**, set a password, and click **Back Up Now**.
- **Windows:** use the **Apple Devices** app (or iTunes on older PCs) and tick **Encrypt local backup** the same way. If you don't already have the Apple Devices app, **ask IT before installing it**.
- Write down that backup password. Without it, you can't restore the backup.

**Heads-up:** A computer backup only happens when you plug in and run it, so iCloud is better for most people.

---

## 3. Use a strong passcode and turn on Erase Data

**Why this matters:** Your passcode is the front door to your phone. Codes like 1234, 0000, 111111 or your birthday are the first ones a thief tries.

**Do step 2 (backups) first.** Erase Data can wipe your phone, so make sure a backup exists.

**Steps: change to a strong passcode**

1. Go to **Settings > Face ID & Passcode** (on phones with a Home button: **Touch ID & Passcode**).
2. Enter your current passcode.
3. Tap **Change Passcode** and enter your current passcode again.
4. Tap **Passcode Options**. Choose **6-Digit Numeric Code** at least, or **Custom Alphanumeric Code** (letters and numbers) for even better protection. Don't pick **4-Digit Numeric Code**.
5. Type your new passcode twice.

A good passcode has no patterns (not 123456 or 135790), no repeated digits, and nothing someone could guess, like a birthday, an address or a phone number.

**Remember your new passcode:**
- Write it down somewhere safe (not on the phone, and not in your phone case) for the first few days.
- Lock and unlock your phone a few times with the passcode, not Face ID, to practise.
- If you forget it within 72 hours, tap **Forgot Passcode?** on the lock screen and use your **old** passcode. Then set a new one.

**Steps: Erase Data after 10 wrong tries**

1. Still in **Settings > Face ID & Passcode**, scroll to the very bottom.
2. Turn on **Erase Data**, then tap **Enable**.

**How to check it worked:** Lock your phone. The unlock screen asks for 6 digits (or shows a keyboard). In **Face ID & Passcode**, **Erase Data** is green.

**Heads-up:** After 10 wrong passcodes in a row, the phone wipes itself. The phone makes you wait longer and longer between wrong tries, so this almost never happens by accident. But if small children play with your phone, keep it away from them.

---

## 4. Set Auto-Lock to 5 minutes or less

**Why this matters:** If you put your phone down and walk away, it locks itself before someone else can pick it up and use it.

**Steps**

1. Go to **Settings > Display & Brightness > Auto-Lock**.
2. Choose **5 minutes** or less. **1 minute** or **2 minutes** is even better.

**How to check it worked:** **Auto-Lock** shows the time you picked. Leave your phone alone, and the screen should go dark after that time.

**Heads-up:** If you see that Auto-Lock is greyed out at 30 seconds, Low Power Mode is on. That's fine. It's even safer.

---

## 5. Check Face ID (or Touch ID)

**Why this matters:** Face ID should only open your phone when you're looking at it, awake. Someone else's face also shouldn't be saved on it.

**Steps: Require Attention**

1. Go to **Settings > Face ID & Passcode** and enter your passcode.
2. Turn on **Require Attention for Face ID**.

**Steps: check for an unknown face**

1. Still in **Face ID & Passcode**, look under the Face ID section.
2. If you see **Set Up an Alternate Appearance**, good. Only one face is saved. Don't set one up unless you really need it.
3. If you **don't** see that button, a second face (an "alternate appearance") is already saved. If you didn't add it yourself, tap **Reset Face ID**, then tap **Set Up Face ID** and scan only your own face.

**If you don't see this (phones with a Home button):** Go to **Settings > Touch ID & Passcode**. Look at the list of fingerprints. Swipe left on any you don't recognise and tap **Delete**. You can rename them by tapping a fingerprint, so you know which finger is which.

**How to check it worked:** **Require Attention for Face ID** is green. Close your eyes and try to unlock with Face ID. It shouldn't work.

**Heads-up:** If you wear sunglasses that block your eyes, Face ID may not work with Require Attention on. Just use your passcode then.

---

## 6. Lock down your Apple Account

**Why this matters:** Your Apple Account holds your photos, messages, passwords and backups. If someone gets into it, they can see all of it, and they can even lock you out of your own phone.

**Heads-up before you start:** If **Stolen Device Protection** (step 8) is already on, some changes below (removing a phone number or device, changing your password, adding a Recovery Contact) may make you wait an hour, especially away from home. If that happens, carry on with the other steps and come back later.

### 6a. Make sure two-factor authentication is on

Two-factor means that when you sign in on a new device, Apple also sends a code to your phone. A password alone isn't enough.

1. Go to **Settings** and tap **your name** at the top.
2. Tap **Sign-In & Security**. (On older versions this is **Password & Security**.)
3. Look at **Two-Factor Authentication**. It should say **On**.
4. If it says **Off**, tap it, then tap **Turn On Two-Factor Authentication** and follow the prompts.

### 6b. Check your trusted phone numbers

These are the numbers Apple sends sign-in codes to.

1. In **Settings > [your name] > Sign-In & Security**, look at the list of phone numbers (tap **Two-Factor Authentication** if you don't see them).
2. Make sure every number is yours, or belongs to someone you really trust.
3. To remove one, tap **Edit**, then tap the red minus next to the number.
4. It's a good idea to add a second number you control, like a home phone or a partner's phone, so you can still get codes if you lose your phone.

### 6c. Check which devices are signed in

1. Go to **Settings > [your name]** and scroll to the bottom. You'll see a list of devices signed in with your Apple Account.
2. Tap any device you don't recognise, or one you sold or gave away.
3. Tap **Remove from Account**, then confirm.
4. If you removed something you didn't recognise, change your Apple Account password afterwards: **Settings > [your name] > Sign-In & Security > Change Password**.

### 6d. Add a Recovery Contact

A Recovery Contact is a person you trust who can help you get back into your account if you forget your password. They can't see your data. They can only give you a code.

1. Go to **Settings > [your name] > Sign-In & Security > Recovery Contacts**.
2. Tap **Add Recovery Contact**.
3. Pick someone from the list or tap **Choose Someone Else**. They need an Apple device (iPhone, iPad or Mac) that's up to date, with iMessage turned on. You need iMessage on too, and you both need to be over 13.
4. Follow the prompts. They'll get a message to accept. (Family members in your Family Sharing group are added straight away.)

**How to check it worked:** Two-factor says **On**. Every phone number and device in the list is yours. Your Recovery Contact shows in the list once they accept.

**Heads-up:** Removing a device signs it out of iCloud. If it was an old phone you still use for something, it will ask for the password next time.

---

## 7. Turn on Find My

**Why this matters:** If you lose your phone, Find My shows it on a map, makes it play a sound, and lets you lock it or wipe it from another device.

**Steps**

1. Go to **Settings > [your name] > Find My**.
2. Tap **Find My iPhone**.
3. Turn on **Find My iPhone**.
4. Turn on **Find My network**. This lets your phone be found even when it's offline or switched off for a while.
5. Turn on **Send Last Location**. This sends the phone's location to Apple just before the battery dies.

**How to check it worked:** All three switches are green. On another device or a computer, go to **icloud.com/find**, sign in, and you should see your iPhone on the map.

**Heads-up:** With Find My on, nobody can wipe and resell your phone without your Apple Account password. If you ever sell or give away the phone, sign out of your Apple Account first.

---

## 8. Turn on Stolen Device Protection (set to "Always")

**Why this matters:** Sometimes a thief watches you type your passcode, then steals your phone. Stolen Device Protection stops them from changing your Apple Account password with just the passcode. They also need your face, and for the most important changes, they have to wait an hour. While it's on, nobody can turn off Find My at all.

This step comes after steps 6 and 7 on purpose. Once it's set to **Always**, Apple Account changes take an hour, so it's easier to make them first.

**Steps**

1. Go to **Settings > Face ID & Passcode** and enter your passcode.
2. Scroll down and tap **Stolen Device Protection**.
3. Turn on **Stolen Device Protection** if it isn't on already.
4. Under **Require Security Delay**, choose **Always**.

**How to check it worked:** The **Stolen Device Protection** screen shows it as on, with **Always** ticked.

**If you don't see this, or it won't turn on:** It needs all of these:
- Two-factor authentication on (step 6a).
- A passcode (step 3) and Face ID or Touch ID (step 5).
- Find My on (step 7).
- **Significant Locations** on: go to **Settings > Privacy & Security > Location Services > System Services > Significant Locations** and turn it on. (The main **Location Services** switch must be on too.)

**Heads-up:**
- With **Always** chosen, some changes make you **wait one hour** and then use Face ID again, even at home. These include changing your Apple Account password or your passcode, changing trusted phone numbers, devices or Recovery Contacts, and adding or removing Face ID. That's the point. It's annoying for you, and much more annoying for a thief.
- Before you take your phone for repair, sell it, or move to a new phone, turn this off first. Turning it off can also need the one-hour wait, so plan ahead.

---

## 9. Limit what works on the Lock Screen

**Why this matters:** Some things work even while your phone is locked. A stranger holding your locked phone could switch on Airplane Mode (so you can't track it), reply to your messages, or unlock your smart front door.

### 9a. Allow Access When Locked

1. Go to **Settings > Face ID & Passcode** and enter your passcode.
2. Scroll to **Allow Access When Locked**.
3. Turn **off** these:
   - **Control Center**: stops a thief from switching on Airplane Mode or turning off Wi-Fi to hide the phone.
   - **Reply with Message**: stops people replying to your messages from the Lock Screen.
   - **Home Control**: stops people controlling your smart home, like locks, lights or garage doors.
   - **Accessories** (iOS 18 only): keep it **off**. On iOS 26 this switch isn't here any more. See 9b instead.
4. The rest is **your choice**. These include **Wallet**, **Siri**, **Notification Center**, **Today View and Search**, **Lock Screen Widgets**, **Live Activities** and **Return Missed Calls**. Turning more off is safer. Leaving some on is more convenient. For example, keeping **Wallet** on lets you show a boarding pass quickly. Apple Pay still needs your face or passcode to pay.

### 9b. Wired accessories (iOS 26)

This controls whether things you plug in with a cable (a computer, a car, a USB gadget) can talk to your phone.

1. Go to **Settings > Privacy & Security**.
2. Scroll down to the **Security** section and tap **Wired Accessories**.
3. Choose **Ask for New Accessories** (or **Always Ask** if you want to approve every time).
4. If you only see **Automatically Allow When Unlocked** and **Always Allow** (phones with a Lightning port do), keep **Automatically Allow When Unlocked**.
5. Never choose **Always Allow**.

**How to check it worked:** Lock your phone. Swipe down from the top right corner. Control Center should not open. In **Wired Accessories**, your choice has a tick.

**Heads-up:**
- You'll need to unlock your phone to use Control Center (the flashlight, for example). Just look at the phone first, then swipe.
- Charging from a normal wall plug still works. A wired car system, dock or USB gadget may ask you to unlock the phone or approve it first.

---

## 10. Hide message previews on the Lock Screen

**Why this matters:** Messages often include login codes and private things. Anyone near your locked phone can read them if previews show.

**Steps**

1. Go to **Settings > Notifications**.
2. Tap **Show Previews**.
3. Choose **When Unlocked**.

**How to check it worked:** Ask someone to text you while your phone is locked. You'll see who it's from, but not what it says. When you look at the phone, Face ID unlocks it and the text appears.

**Heads-up:** On phones with Face ID this is barely noticeable, because the preview appears as soon as you look at the phone.

---

## 11. Add a SIM PIN, and lock your account with your carrier

**Why this matters:** Criminals can steal your phone number. They either take the SIM card out of a stolen phone, or they call your carrier pretending to be you and ask for a new SIM. This is called a "SIM swap." Once they have your number, they get your text-message login codes. A SIM PIN and a carrier lock stop both.

### 11a. Turn on SIM PIN

**Before you start, read this:**
- Your SIM card already has a **default PIN** from your carrier (often 0000 or 1111, but it varies). **Look it up first** on your carrier's website or app, or call them. **Don't guess.**
- If you type the wrong SIM PIN **3 times**, the SIM locks. You'll then need a longer code called a **PUK** from your carrier to unlock it. Get your PUK from your carrier's website or app, or by calling them, and keep it somewhere safe. Too many wrong PUK tries can kill the SIM for good, and you'd need a new one from the carrier.

**Steps**

1. Go to **Settings > Cellular** (in some countries it's called **Mobile Service** or **Mobile Data**).
2. Tap **SIM PIN**. If you have more than one line, tap the line first, then **SIM PIN**.
3. Turn on **SIM PIN**.
4. Enter your carrier's default PIN and tap **Done**.
5. Tap **Change PIN**. Enter the default PIN, then a new 4 to 8 digit PIN that only you know. Don't use your phone passcode.
6. Write the new SIM PIN and your PUK somewhere safe, away from your phone, such as a password manager.

**How to check it worked:** Restart your phone:
- **Face ID phones:** press and hold the side button and either volume button until you see **slide to power off**. Drag the slider. Wait 30 seconds, then press and hold the side button until the Apple logo appears.
- **Phones with a Home button:** press and hold the side (or top) button until you see the slider, drag it, then press and hold the same button to turn it back on.

After it starts, the phone asks for your SIM PIN before it connects to the mobile network.

**If you don't see this:** Some carriers hide **SIM PIN** for eSIMs (a SIM with no physical card). If you can't find it, the carrier lock in step 11b matters even more.

**Heads-up:** You'll type the SIM PIN every time your phone restarts, **including the overnight restarts after automatic updates** (step 1). Until you do, calls and mobile data won't work (Wi-Fi still will). If you wake up to **SIM Locked** or **No Service**, unlock your phone and type your SIM PIN.

### 11b. Lock your account with your carrier

Every carrier does this differently, and they change the names often. Here's what to look for:

1. Sign in to your carrier's website or app.
2. Look for a section called something like **Security**, **Profile**, **Account settings** or **Privacy**.
3. Turn on anything called **SIM protection**, **number lock**, **port-out protection**, **number transfer lock** or **account lock**. This stops anyone moving your number to another SIM or another carrier without extra checks.
4. Set an **account PIN** or **passcode**. This is different from your SIM PIN. The carrier asks for it when anyone calls or visits a shop about your account. Don't use your birthday or your phone passcode.

For example, the big US carriers offer features with names like "Number Lock," "SIM Protection" or "Wireless Account Lock," plus an account PIN or passcode. If you can't find these, call your carrier and say: *"I'd like to add SIM swap protection, a number transfer lock, and an account PIN."*

**How to check it worked:** Your carrier's site or app shows the protection as on, and you have an account PIN saved somewhere safe.

**Heads-up:** When you genuinely want a new phone or a new carrier, you'll need to switch the lock off first. That can take a few minutes, or a day with some carriers.

---

## 12. Set AirDrop to Contacts Only

**Why this matters:** If AirDrop is set to everyone, strangers nearby (on a train, say) can send you pictures or files you didn't ask for.

**Steps**

1. Go to **Settings > General > AirDrop**.
2. Choose **Contacts Only**. If you never use AirDrop, choose **Receiving Off**.

**How to check it worked:** **Contacts Only** (or **Receiving Off**) has a tick.

**Heads-up:** If you need to get a file from someone who isn't in your contacts, you can pick **Everyone for 10 Minutes**. It switches back to **Contacts Only** on its own after 10 minutes. With **Contacts Only**, the other person has to be saved in your Contacts with the email or phone number they use for their Apple Account.

---

## 13. Check for unknown profiles (and install IT's profile, if they send one)

**Why this matters:** A "profile" is a small settings file that can change how your phone works. Some can route your internet through someone else's server. A scam site might trick you into installing one.

### 13a. Check for anything unknown

1. Go to **Settings > General > VPN & Device Management**.
2. Look at what's listed under **Configuration Profile** or **VPN**.
3. If you see anything you didn't install and IT didn't send you, tap it and tap **Remove Profile**, enter your passcode, and confirm. If you're not sure, **don't remove it yet**. Take a screenshot and send it to IT.

**How to check it worked:** Only things you know about are listed, or the screen shows only **VPN: Not Connected** and nothing else.

### 13b. Installing IT's safe-browsing profile (only if IT sends one)

IT may send you a profile that blocks dangerous websites. This is called DNS filtering. **IT will send you a link or a file**. Only install it if it came from IT directly, and you were expecting it.

1. Open what IT sent:
   - **If it's a link:** press and hold the link, then tap **Copy Link**. Open the **Safari** app (the blue compass), tap the address bar, tap **Paste and Go**. Use Safari even if you normally use another browser, because other browsers can't install profiles.
   - **If it's a file attached to an email in the Mail app:** just tap the attachment.
2. When asked "This website is trying to download a configuration profile," tap **Allow**, then **Close**.
3. Go to **Settings**. Near the top, tap **Profile Downloaded**. (If you don't see it, go to **Settings > General > VPN & Device Management** and tap the profile under **Downloaded Profile**.)
4. Check the name matches what IT told you. The screen may show a green **Verified** or a red **Not Verified** label. IT will tell you which one to expect. If it doesn't match what IT said, stop and ask IT.
5. Tap **Install**, enter your passcode, then tap **Install** again, and **Done**.

**How to check it worked:** IT's profile shows in **Settings > General > VPN & Device Management**.

**Heads-up:** If you don't install a downloaded profile within 8 minutes, it disappears. Just open IT's link again.

---

## 14. Turn on Safari's fraud warning

**Why this matters:** Fake websites copy your bank or email login page to steal your password. Safari can warn you before the page opens.

**Steps**

1. Go to **Settings > Apps > Safari**. (On iOS 17 and older: **Settings > Safari**.)
2. Scroll to **Privacy & Security**.
3. Turn on **Fraudulent Website Warning**.

**How to check it worked:** The switch is green.

---

## 15. Turn on automatic app updates

**Why this matters:** Apps have security holes too. Updates fix them, but only if you install them.

**Steps**

1. Go to **Settings > Apps > App Store**. (On iOS 17 and older: **Settings > App Store**.)
2. Under **Automatic Downloads**, turn on **App Updates**.

**How to check it worked:** **App Updates** is green.

---

## 16. Never "Trust" an unknown computer

**Why this matters:** When you plug your iPhone into a computer, a message asks **Trust This Computer?** If you tap **Trust**, that computer can copy your photos, messages and files. A dodgy charging point or someone else's laptop could do this.

**What to do**

- Only tap **Trust** for your **own** computer.
- If you're just charging, at an airport, a hotel, or a friend's laptop, tap **Don't Trust**. It will still charge.
- Use your own charger and plug when you can.

**If you've tapped Trust in the past and aren't sure where: reset it**

1. Go to **Settings > General > Transfer or Reset iPhone > Reset**.
2. Tap **Reset Location & Privacy** and enter your passcode.
3. Confirm.

**How to check it worked:** Next time you plug into any computer, including your own, it asks **Trust This Computer?** again.

**Heads-up:** This **doesn't** delete your photos or apps. But it does reset every app's permission to use your location, camera, microphone and so on. Each app will ask you again the first time you open it. Just answer the questions as they come up. This is a good moment to say **No** to apps that don't need things. Afterwards, check that **Significant Locations** is still on (see step 8), because Stolen Device Protection needs it.

---

## 17. Know what to do if your phone is lost

**Why this matters:** The first 30 minutes matter. Knowing these steps now means you won't panic later.

**Steps: use Mark As Lost**

1. On another device or a computer, go to **icloud.com/find** and sign in with your Apple Account. You won't need a code from your lost phone to use this page. (Or use the **Find My** app on another Apple device, or on a family member's iPhone using **Help a Friend** in the **Me** tab (check: path may differ).)
2. Choose your iPhone from the list of devices.
3. Tap **Mark As Lost** (on icloud.com it may be shown as **Lost Mode**). Turn it on.
4. Type a phone number where you can be reached and a short message, like "This phone is lost. Please call 555-0100." Tap **Activate** (or **Next** and then **Activate**).
5. If you think it's nearby, tap **Play Sound** first.

**What Mark As Lost does:** It locks the phone, shows your message on the screen, pauses Apple Pay and your cards, and keeps tracking its location.

**Then:**
- **Tell IT straight away**, even if it's your personal phone, because it has work data on it.
- Call your carrier to block the SIM. (Your SIM PIN from step 11 buys you time.)
- If it's stolen, report it to the police. Don't try to get it back yourself.
- Only use **Erase This Device** if you're sure it's gone for good. After erasing, you can no longer see where it is. Find My still stops anyone else using it.
- **Don't remove the phone from your account**, even after erasing it. If you do, anyone can set it up again as their own.

**How to check it worked (practice now):** Go to **icloud.com/find** on a computer and check you can sign in and see your iPhone. Don't press Mark As Lost now.

---

# Part 2: Nice-to-have

## 18. Run Safety Check

**Why this matters:** Over the years, you may have shared your location, photos or notes with people, or given apps access you've forgotten about. Safety Check walks you through all of it in one place.

**Steps**

1. Go to **Settings > Privacy & Security > Safety Check** (scroll down to find it).
2. Tap **Manage Sharing & Access**, then **Continue**.
3. Follow the screens. Check who you share with, which apps can see what, and your account security. Stop sharing anything you no longer want to share.

**How to check it worked:** Safety Check finishes and takes you back to its start screen.

**Heads-up:** If you stop sharing with someone, you may also lose access to things they shared with you, like a shared photo album. **Emergency Reset** (also on this screen) is for people in an unsafe situation. It stops all sharing at once. You don't need it for this guide.

---

## 19. Review app permissions

**Why this matters:** Apps you installed years ago may still be able to see your location all the time, or use your microphone. If an app doesn't need it, take it away.

**Steps**

Go to **Settings > Privacy & Security**, then go through each of these:

1. **Location Services**: **Leave the main Location Services switch at the top ON.** Turning it off stops Find My from showing where your phone is, and breaks Stolen Device Protection. Also leave **Find My** and **System Services** alone. Then tap each app in the list. Choose **While Using the App** or **Never**. Keep **Always** only for apps that truly need it, like a car-sharing or a family-locating app.
2. **Microphone**: Turn off any app that doesn't need to hear you.
3. **Camera**: Turn off any app that doesn't need to take photos or video.
4. **Photos**: Tap each app. Choose **Limited Access** (you pick which photos it can see) or **None** instead of **Full Access**, unless it's a photo app you trust.
5. **Local Network**: Turn off apps that don't need to find gadgets in your home (printers, speakers, TVs). Most apps don't need this.

**How to check it worked:** Each list only shows apps you're happy with.

**Heads-up:** If an app stops working properly (for example, a map app can't find you), go back and turn its permission back on.

---

## 20. Check which devices get your texts and calls

**Why this matters:** Your texts and calls can also go to your Mac or iPad. If an old device, or one someone else uses, is on the list, that person may see your messages and login codes.

**Steps: texts**

1. Go to **Settings > Apps > Messages > Text Message Forwarding**. (On iOS 17 and older: **Settings > Messages**.)
2. Turn off any device you don't recognise or no longer use.

**Steps: calls**

1. Go to **Settings > Apps > Phone > Calls on Other Devices**. (On iOS 17 and older: **Settings > Phone**.)
2. Turn off any device you don't recognise or no longer use. If you never answer calls on other devices, turn off **Allow Calls on Other Devices**.

**How to check it worked:** Only your own devices are switched on.

**If you don't see this:** If **Text Message Forwarding** isn't there, iMessage may be off, or no other Apple device is signed in to your iMessage. That's fine.

---

## 21. Make sure call forwarding is off

**Why this matters:** Scammers sometimes switch on call forwarding so that your calls, including the "your login code is..." calls from banks, go to them instead.

**Steps**

1. Go to **Settings > Apps > Phone > Call Forwarding**. (On iOS 17 and older: **Settings > Phone > Call Forwarding**.)
2. Make sure **Call Forwarding** is **off**, unless you turned it on yourself on purpose.

**How to check it worked:** The switch is grey.

**If you don't see this:** Some carriers hide this option. In that case, check call forwarding in your carrier's app or website, or ask them.

---

## 22. Screen messages from unknown senders

**Why this matters:** Most scam texts come from numbers you don't know. This puts them in a separate list, so you're less likely to tap a bad link.

**Steps**

1. Go to **Settings > Apps > Messages**.
2. Scroll to **Unknown Senders**. Turn on **Screen Unknown Senders**. (On iOS 18, this is called **Filter Unknown Senders**, under **Message Filtering**.)

**How to check it worked:** In the Messages app, tap the filter button in the top corner. You'll see an **Unknown Senders** list.

**Heads-up:** Texts from new numbers, like a delivery driver or a new doctor's office, go into that list. Login codes and urgent alerts usually still notify you. Whether other texts from new numbers notify you depends on your country. In some countries you can choose this in **Settings > Apps > Messages > Unknown Senders > Allow Notifications**. Check **Unknown Senders** now and then.

---

## 23. Review Safari extensions

**Why this matters:** Extensions are add-ons for Safari. A bad one can read every page you visit, including your bank.

**Steps**

1. Go to **Settings > Apps > Safari > Extensions**. (On iOS 17 and older: **Settings > Safari > Extensions**.)
2. Tap each extension. If you don't know what it is or don't use it, turn it off. Better still, delete the app that came with it.

**How to check it worked:** Only extensions you know and use are on.

---

## 24. Tidy up Wi-Fi settings

**Why this matters:** Free public Wi-Fi (coffee shops, hotels) is often not protected. Anyone can create a fake one with the same name.

**Steps**

1. Go to **Settings > Wi-Fi**.
2. Tap **Auto-Join Hotspot** and choose **Ask to Join** (or **Never**). This stops your phone quietly switching to your own or your family's iPhone or iPad hotspot (which can use up mobile data). It's more about tidiness than safety.
3. Tap **Edit** in the top corner to see your saved networks. Delete old public ones, like airports, hotels and cafes: tap the red minus, then **Delete**.
4. For each network you still use, tap the **i** next to it and check **Private Wi-Fi Address** is on. On iOS 18 and 26, choose **Fixed** or **Rotating**, not **Off**. (On older versions it's a simple on/off switch.)

**How to check it worked:** Your saved list only has networks you trust. Auto-Join Hotspot shows **Ask to Join** or **Never**.

**Heads-up:**
- Only delete networks you won't use again. You'll need the Wi-Fi password to rejoin, and the network may also disappear from your other Apple devices.
- If a Wi-Fi network at work or home stops working after you change **Private Wi-Fi Address**, set it to **Fixed** for that one network, or ask IT.

---

## 25. Review Shortcuts automations

**Why this matters:** The Shortcuts app can run actions on its own, like sending your location to someone. If someone set one up on your phone, you might never notice.

**Steps**

1. Open the **Shortcuts** app.
2. Tap **Automation** at the bottom.
3. Look at each one. If you didn't create it, or don't need it, swipe left on it and tap **Delete**.

**How to check it worked:** The list is empty, or only has automations you made yourself.

**If you don't see this:** If you deleted the Shortcuts app, there's nothing to check.

---

## 26. Check accessibility settings for anything you didn't set up

**Why this matters:** Accessibility features are great for people who need them. But a few of them, if someone turns them on without you knowing, can be misused. For example, Live Listen can turn your phone into a microphone that someone listens to through AirPods. Only change the ones you **don't** use.

**Steps: Live Listen**

1. Open Control Center (swipe down from the top right corner).
2. If you see a **Hearing** button (an ear icon) and you don't use it, tap it and make sure **Live Listen** is off.
3. To remove it: tap the **+** in the top left corner, then tap the minus on the **Hearing** button, then tap an empty area to finish.

**Steps: other features to check**

Go to **Settings > Accessibility** and check each of these:

1. **Hearing Devices**: If you see a hearing aid you don't own, tap its name, then tap **Forget This Device**.
2. **Switch Control** (under **Physical and Motor**): Should be off unless you use it.
3. **Voice Control** (under **Physical and Motor**): Should be off unless you use it.
4. **Accessibility Shortcut** (at the very bottom): This is what happens when you triple-click the side button (or the Home button on phones that have one). Untick anything you don't use.

**About Control Nearby Devices:** This lets **your** iPhone act as a remote for your other Apple devices signed in to the same Apple Account. There's no switch to turn off. It only runs when you tap it. Just make sure it isn't ticked in your **Accessibility Shortcut** list if you don't use it.

Also go to **Settings > Bluetooth** and look at **My Devices**. If you see a headset, speaker or device you don't own, tap the **i** next to it, then **Forget This Device**.

**How to check it worked:** Triple-click the side button (or the Home button on phones that have one). Nothing happens, or only a feature you use comes on.

**Heads-up:** If you or someone in your family relies on any of these features, keep them on. This is only about features you didn't set up.

---

## 27. Cut down tracking and ad sharing

**Why this matters:** Apps and advertisers build a profile of what you do. Less sharing means less data about you if one of them is hacked.

**Steps**

1. Go to **Settings > Privacy & Security > Tracking**. Turn off **Allow Apps to Request to Track**.
2. Go back to **Settings > Privacy & Security > Analytics & Improvements**. Turn off **Share iPhone Analytics** (it may say **Share iPhone & Watch Analytics**), and anything else on that screen.
3. Go back to **Settings > Privacy & Security > Apple Advertising**. Turn off **Personalized Ads**.

**How to check it worked:** All three switches are grey.

**Heads-up:** You'll still see ads. They'll just be less personal.

---

## 28. Delete apps you don't use

**Why this matters:** Every app is another door. Old apps stop getting fixes, and some still collect data in the background.

**Steps**

1. Go to **Settings > General > iPhone Storage**. Wait for the list to load. It shows when you last used each app.
2. Tap an app you don't need, then tap **Delete App** and confirm.
3. Or on the Home Screen: press and hold the app, tap **Remove App**, then **Delete App**.

**How to check it worked:** The app is gone from your Home Screen and App Library.

**Heads-up:** Deleting an app may delete what's saved inside it. If you want to keep the data but free up space, choose **Offload App** instead. But for security, deleting is better.

---

# Part 3: Only if IT tells you to

These are strong protections for people who might be targeted on purpose, for example people who handle very sensitive information or travel to high-risk places. They have real downsides. **Don't turn them on unless IT has asked you to.**

## 29. Lockdown Mode

**What it is:** An extreme protection mode. It switches off many features that attackers use to break into phones.

**Before you start:** If IT sent you a profile (step 13b), install it **first**. You can't install profiles while Lockdown Mode is on.

**Steps**

1. Go to **Settings > Privacy & Security**, scroll down and tap **Lockdown Mode**.
2. Tap **Turn On Lockdown Mode**.
3. Tap **Turn On Lockdown Mode** again to confirm.
4. Tap **Turn On & Restart**, and enter your passcode.

**How to check it worked:** **Settings > Privacy & Security > Lockdown Mode** shows **On**. Safari shows a banner saying Lockdown Mode is on.

**Downsides:**
- You can't install new profiles, including IT's safe-browsing profile. If you need one later, turn Lockdown Mode off, install it, then turn Lockdown Mode back on.
- Most message attachments are blocked (some images, video and audio still work). Links and link previews in Messages don't work.
- Some websites look broken or load slowly.
- FaceTime calls are blocked from people you haven't called in the past 30 days.
- Shared albums are removed.
- Your phone must be unlocked to connect to accessories or computers.
- You can turn off Lockdown Mode for specific websites or apps if needed.

---

## 30. Advanced Data Protection

**What it is:** Extra encryption for almost everything in iCloud, including backups, photos and notes. Even Apple can't read it.

**Steps**

1. First make sure you have a **Recovery Contact** (step 6d). Apple also offers a **Recovery Key** (a long code you must store yourself). Only set up a Recovery Key if IT walks you through it, because losing it can lock you out for good.
2. Go to **Settings > [your name] > iCloud**.
3. Scroll down and tap **Advanced Data Protection**.
4. Tap **Turn On Advanced Data Protection** and follow the prompts.

**How to check it worked:** **Advanced Data Protection** shows **On**.

**Downsides:** If you forget your password and lose your Recovery Contact or Recovery Key, **Apple cannot get your data back. It's gone for good.** You can't view your data on icloud.com by default. All your Apple devices must be up to date. With Stolen Device Protection set to **Always** (step 8), turning this on may make you wait an hour.

**If you don't see this:** Advanced Data Protection is not available in every country (for example, Apple withdrew it in the UK).

---

## 31. Security keys

**What it is:** A small physical key (like a USB stick) that you use instead of a code when signing in to your Apple Account on a new device. It's very hard to phish.

**Steps**

1. You need **two** security keys that work with Apple (IT will usually give these to you).
2. Go to **Settings > [your name] > Sign-In & Security > Two-Factor Authentication > Security Keys**.
3. Tap **Add Security Keys** and follow the prompts to add both keys.
4. At the end, you'll see a list of devices signed in to your account. Keep the ones you use.

**How to check it worked:** Both keys show in the Security Keys list.

**Downsides:**
- If you lose **both** keys and all your Apple devices, you may be locked out of your Apple Account for good, and Apple can't help. Keep the second key somewhere safe at home.
- Every device signed in to your account needs iOS 16.3, iPadOS 16.3 or macOS 13.2 or later. Older devices can't stay signed in.
- Devices you haven't used in more than 90 days get signed out when you set this up.
- On a Windows PC, iCloud for Windows must be version 15 or later.
- It doesn't work with child accounts or company-managed (Managed) Apple Accounts.
- With Stolen Device Protection set to **Always** (step 8), adding keys may make you wait an hour.

---

## 32. Contact Key Verification

**What it is:** A way to make sure you're messaging the real person in iMessage, not an impostor. If someone sneaks a fake device into a conversation, you get a warning.

**Steps**

1. Go to **Settings > [your name] > Contact Key Verification**.
2. Turn on **Verification in iMessage**, then tap **Continue**.
3. Follow the prompts. You may need to update or sign out of iMessage on old devices.

**How to check it worked:** **Verification in iMessage** is green. In a chat with someone who also has it on, you can compare verification codes in person.

**Downsides:** All your Apple devices signed in to iMessage need to be up to date, and old ones may need to sign out of iMessage. It doesn't work with company-managed (Managed) Apple Accounts. It only helps if the other person turns it on too.

---

## You're done

Great work. Your iPhone is now much harder to break into, and much easier to get back if it's lost.

**Every few months**, take 5 minutes to:
- Check **Settings > General > Software Update**.
- Look at the device list in **Settings > [your name]**.
- Run **Safety Check** again.

If anything in this guide didn't match what you see on your phone, or if something stopped working, contact IT and tell them which step number. A screenshot helps a lot.
