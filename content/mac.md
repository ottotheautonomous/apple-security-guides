# Securing Your Mac: A Step-by-Step Guide

## What this is

Your Mac isn't managed by the company's device management system. That means nobody can switch on security settings for you remotely, so this guide walks you through doing it yourself, one setting at a time.

You don't need to be "good with computers." Every step tells you exactly what to click. Words in **bold** are the exact words you'll see on screen. A path like **System Settings > General > Software Update** means: open System Settings, click **General**, then click **Software Update**.

This guide is written for **macOS 26 Tahoe**. If your Mac is still on **macOS 15 Sequoia**, it mostly looks the same. Where something has a different name, we say so.

## How long it takes

- **Must-do section:** about 60 to 75 minutes, plus time for the update to install and the first backup to run.
- **Nice-to-have section:** about 25 minutes.
- You don't have to do it all in one go. The checklist below helps you keep your place.

## What to have ready

- **Your Mac login password** (the one you type to unlock your Mac).
- **Your Apple Account password** (what Apple used to call your Apple ID). You'll need it for Find My Mac and some of the later steps.
- **Your charger.** Plug your Mac in. Updates and encryption won't run properly on battery.
- **A safe place to save a recovery key**, such as a password manager, or paper you can lock away. You'll need this in step 2.
- **An external drive** for backups (step 19). No drive yet? Do everything else and come back to step 19 when you have one.
- **The link or file from IT** for the web filtering profile (step 20), if IT has sent you one.

> **Note:** The SIM PIN step in the iPhone guide needs your phone carrier login. You don't need it for the Mac.

> **How to reach IT**
> - Email: `[IT email address]`
> - Phone: `[IT phone number]`
>
> Whenever this guide says "ask IT" or "contact IT," this is who to contact.

## How to open System Settings

You'll use this a lot. Click the **Apple menu** (the apple logo, top-left corner of the screen) and choose **System Settings**. The list down the left side is called the **sidebar**. If you can't see an item, scroll down in the sidebar. You can also type its name in the **Search** box at the top of the sidebar.

---

## Checklist

Tick each box as you go.

**Before you start**
- [ ] 0. Update your Mac

**Must-do (everyone)**
- [ ] 1. Turn on automatic updates (macOS and App Store)
- [ ] 2. Turn on FileVault (disk encryption) and save your recovery key
- [ ] 3. Turn on the firewall and stealth mode
- [ ] 4. Lock the screen quickly and use a strong password
- [ ] 5. Turn off the guest account and automatic login
- [ ] 6. Check for unknown accounts
- [ ] 7. Turn off sharing services you don't use
- [ ] 8. Turn off AirPlay Receiver and set AirDrop to Contacts Only
- [ ] 9. Only allow apps from the App Store and known developers
- [ ] 10. Require an admin password for system settings
- [ ] 11. Review which apps can see your screen, keyboard, files, camera and microphone
- [ ] 12. Review apps that start by themselves
- [ ] 13. Review browser extensions
- [ ] 14. Turn on Find My Mac
- [ ] 15. Stop Safari opening downloads automatically
- [ ] 16. Remove unknown profiles
- [ ] 17. Show file extensions in Finder
- [ ] 18. Check your Mac's built-in protection is on
- [ ] 19. Turn on encrypted Time Machine backups
- [ ] 20. Install the web filtering profile from IT (if IT sent you one)

**Nice-to-have**
- [ ] 21. Use a standard (non-admin) account day to day
- [ ] 22. Set a lock screen message

**Only if IT tells you to**
- [ ] 23. Lockdown Mode
- [ ] 24. Advanced Data Protection for iCloud
- [ ] 25. Security keys for your Apple Account

---

## Before you start

### 0. Update your Mac

**Why this matters:** Most attacks use security holes that Apple has already fixed. Updating closes those holes. Many later steps also assume you're on the latest version.

**Steps**
1. Save your work and plug in your charger.
2. Open **System Settings > General > Software Update**.
3. Wait while it checks. If an update appears, click **Update Now** (or **Restart Now** if it's already downloaded).
4. Enter your password if asked. Your Mac will restart, maybe more than once. This can take 20 to 60 minutes.
5. When it's back, open **Software Update** again and repeat until it says your Mac is up to date.

**How to check it worked:** **Software Update** says your Mac is up to date. On Sequoia: if the only thing left is an offer to upgrade to macOS Tahoe (usually shown as **Upgrade Now**), you're done with this step.

**If you don't see this:** If it offers an upgrade to a whole new macOS (for example, from Sequoia to Tahoe), check with IT before installing it. Some older Macs can't run macOS 26. That's OK for now. Install the latest updates for the version you have, and tell IT your Mac model.

---

## Must-do (everyone)

### 1. Turn on automatic updates (macOS and App Store)

**Why this matters:** You'll get urgent security fixes even if you forget to check. Some fixes install quietly in the background in a few minutes.

**Part A: macOS updates**
1. Open **System Settings > General > Software Update**.
2. Click the small **i** (info) button next to **Automatic Updates**.
3. Turn on all of these:
   - **Download new updates when available**
   - **Install macOS updates**
   - **Install Security Responses and system files** (small, urgent security fixes that install quickly, often without a restart)
4. Click **Done**.

**Part B: App updates from the App Store**
1. Open the **App Store** app.
2. In the menu bar click **App Store > Settings**.
3. Tick **Automatic Updates**.

**How to check it worked:** Click the **i** next to **Automatic Updates** again and confirm all three switches are on. Then reopen **App Store > Settings** and confirm **Automatic Updates** is still ticked.

**If you don't see this:** On macOS 15 Sequoia, the **i** window in Part A also has **Check for updates** and **Install application updates from the App Store**. Turn those on too (the second one does the same job as Part B).

**Heads-up:** Your Mac may restart overnight to finish an update. Save your work before you leave it. Laptops only download updates when plugged in. Apps you installed from websites (not the App Store) update separately: accept their update prompts, or look in their menu for "Check for Updates."

### 2. Turn on FileVault (disk encryption) and save your recovery key

**Why this matters:** If your Mac is lost or stolen, FileVault scrambles everything on it so no one can read your files without your password. Without it, anyone can pull your files off the drive in minutes.

**What's a recovery key?** It's a long code of letters and numbers. It's your spare key. If you ever forget your Mac password, the recovery key is the only way back in. **If you lose both your password and your recovery key, your files are gone for good.** Not even Apple can get them back.

**Steps**
1. Plug in your charger.
2. Open **System Settings > Privacy & Security**. Scroll down to the **Security** section and click **FileVault**.
3. If it says FileVault is already on, skip to "How to check it worked."
4. Click **Turn On**. Enter your password if asked.
5. You'll be asked how you want to be able to unlock your disk if you forget your password. What you see depends on your exact version of macOS:
   - **On newer versions of macOS 26:** your Mac creates a recovery key and saves it in the **Passwords** app through iCloud Keychain (Apple's way of syncing your passwords between your Apple devices). It may also show you the key in a window called **Write Down Your Recovery Key**. Write it down or save it somewhere else as well (see below), then click **Done**.
   - **On macOS 15 Sequoia or early macOS 26:** you'll see two choices:
     - **Allow my iCloud account to unlock my disk**: easiest. Your Apple Account can unlock your Mac if you forget your password.
     - **Create a recovery key and do not use my iCloud account**: your Mac shows you a code. You are fully responsible for keeping it safe.
     - Either is fine. If you're not sure, pick the iCloud option, *and* write down a recovery key if one is shown.
6. Click **Continue**. If you see **Enable Users**, every person who logs in to this Mac needs to type their password here.
7. Encryption runs in the background. You can keep using your Mac. Keep it plugged in until it finishes.

**Where to keep your recovery key**
- In a password manager (the company one if you have it), saved as "Mac recovery key" with your Mac's name.
- Or on paper, stored somewhere locked and away from the Mac. Not on a sticky note on the laptop.
- Never only on the Mac itself. If you're locked out, you can't open a file that's on the locked Mac.
- Ask IT whether they want a copy. Some companies keep one for you.

**How to check it worked:**
- **System Settings > Privacy & Security > FileVault** shows that FileVault is turned on (or "encrypting," which is fine).
- **Important:** make sure you can see your recovery key from somewhere *other than this Mac*. For example: the **Passwords** app on your iPhone (search for "recovery key"), your password manager, or your paper copy. If the only copy is on this Mac, write it down now.

**Heads-up:** Your Mac will no longer log you in automatically. You'll always need your password at startup. That's a good thing.

### 3. Turn on the firewall and stealth mode

**Why this matters:** On public Wi-Fi (cafés, hotels, airports) other people's devices can try to connect to your Mac. The firewall blocks connections you didn't ask for. Stealth mode makes your Mac harder to find on the network in the first place.

**Steps**
1. Open **System Settings > Network**, then click **Firewall**.
2. Turn on **Firewall**. Enter your password if asked.
3. Click **Options**.
4. Turn on **Enable stealth mode**.
5. Leave **Automatically allow built-in software to receive incoming connections** and **Automatically allow downloaded signed software to receive incoming connections** turned on. They let normal apps work without endless pop-ups.
6. Click **OK**.

**How to check it worked:** **Network > Firewall** shows the firewall as on, and **Enable stealth mode** stays on when you reopen **Options**.

**Heads-up:** Now and then an app may ask "Do you want the application to accept incoming network connections?" Click **Allow** only for apps you know and use (for example, a video-call app). If you're not sure, click **Deny**. You can change it later in **Options**.

### 4. Lock the screen quickly and use a strong password

**Why this matters:** If you step away for coffee, anyone walking past can use an unlocked Mac, including your email. A short lock timer and a strong password stop that.

**Part A: Turn the screen off after 10 minutes**
1. Open **System Settings > Lock Screen**.
2. Set **Turn display off on battery when inactive** to **For 10 minutes** or less.
3. Set **Turn display off on power adapter when inactive** to **For 10 minutes** or less.

**Part B: Ask for the password straight away**
1. Still in **Lock Screen**, find **Require password after screen saver begins or display is turned off**.
2. Choose **Immediately**.

**Part C: Screen saver (optional)**
Parts A and B already lock your Mac. A screen saver is just extra. If you use one, make it start at the same time as the display turns off, or sooner.
- **On macOS 26 Tahoe:** open **System Settings > Wallpaper**, then click **Screen Saver** to choose a screen saver. Set when it starts to 10 minutes or less (check: path may differ; Apple doesn't name this control for Tahoe).
- **On macOS 15 Sequoia:** set **Start Screen Saver when inactive** in **System Settings > Lock Screen** (the same page as Parts A and B). The separate **Screen Saver** item only picks which screen saver to show.

**Part D: Use a strong login password**
A good password is long. Think of a short sentence you'll remember, like four or five random words. Don't use our example, but it looks like "violin cloudy parcel tractor." Avoid your name, birthday, pet's name or "Password1."
1. Open **System Settings > Users & Groups**.
2. Click the **i** button next to your name, then click **Change**.
3. Type your current password in **Old Password**, the new one in **New Password** and **Verify**, and add a hint that only you would understand. Click **Change Password**.
4. Save the new password in your password manager. If you ever forget it, your recovery key from step 2 gets you back in.

**Quick lock tip:** Press **Control + Command + Q** to lock your screen instantly when you walk away.

**How to check it worked:** Wait for the screen to go dark, then wake it. It should ask for your password right away.

**If you don't see this:** If the **Require password** menu is greyed out and shows **Immediately**, that's fine. iPhone Mirroring keeps it there. Nothing to change.

**Heads-up:**
- You'll type your password (or use Touch ID) more often. Touch ID makes this painless.
- After changing your password, your Mac may ask you to update your "keychain" password (the store where your Mac keeps saved passwords). Choose to update it and type your **old** password when asked.

### 5. Turn off the guest account and automatic login

**Why this matters:** A guest account lets anyone use your Mac without a password. Automatic login means anyone who turns on your Mac gets straight into your account.

**Part A: Turn off the guest account**
1. Open **System Settings > Users & Groups**.
2. Click the **i** button next to **Guest User**.
3. Turn off **Allow guests to log in to this computer**.
4. Click **OK**.

**Part B: Turn off automatic login**
1. Still in **Users & Groups**, find **Automatically log in as**.
2. Choose **Off**.

**How to check it worked:** Restart your Mac. You should see the login screen with no **Guest User** option.

**If you don't see this:** If **Automatically log in as** is missing or greyed out, FileVault is already on, which turns off automatic login for you. That's fine.

**Heads-up:** If you sometimes lend your Mac to someone, they'll need their own account, or you can log in for them while you're there.

### 6. Check for unknown accounts

**Why this matters:** An extra account you didn't create, especially an "Admin" one, could let someone else control your Mac. It's rare, but worth a 30-second look.

**Steps**
1. Open **System Settings > Users & Groups**.
2. Look at the list of users. Each one shows **Admin** or **Standard** under its name.
3. Ask yourself: do I know every account here?
4. If you see one you don't recognise, **don't delete it yourself.** Write down its name and contact IT. Some are created by IT or by apps on purpose.

**How to check it worked:** Every account is one you (or IT) set up.

**Heads-up:** Deleting an account can delete its files. Leave this to IT if you're unsure.

### 7. Turn off sharing services you don't use

**Why this matters:** Each sharing service opens a door so other computers can reach your Mac. Leaving doors open that you never use just gives attackers more chances.

**Steps**
1. Open **System Settings > General > Sharing**.
2. Turn **off** each of these unless you know you use it:
   - **Screen Sharing** (others can see and control your screen)
   - **File Sharing** (others can open your shared folders)
   - **Media Sharing** (shares your music and videos on the network)
   - **Printer Sharing** (shares a printer connected to your Mac)
   - **Remote Login** (lets someone log in from another computer)
   - **Remote Management** (lets someone control your Mac with Apple Remote Desktop)
   - **Remote Application Scripting** (lets other Macs control apps on yours)
   - **Internet Sharing** (turns your Mac into a Wi-Fi hotspot)
   - **Bluetooth Sharing** (lets nearby devices send you files over Bluetooth)
   - **Content Caching** (stores Apple downloads to share with other devices)
3. You might not see every item on every Mac. That's normal.

**How to check it worked:** Every switch in **Sharing** is off, except anything you deliberately use.

**Heads-up:** If you share a printer at home or use a remote-support tool, that feature will stop until you turn its switch back on. If IT uses remote support with you, ask them which (if any) to leave on.

### 8. Turn off AirPlay Receiver and set AirDrop to Contacts Only

**Why this matters:** AirPlay Receiver lets nearby devices send video and sound to your Mac. AirDrop set to "Everyone" lets strangers on a train send you pictures or files out of the blue.

**Steps**
1. Open **System Settings > General > AirDrop & Continuity**. On macOS 15 Sequoia this is called **AirDrop & Handoff**.
2. Turn off **AirPlay Receiver**.
3. Next to **AirDrop**, choose **Contacts Only**.

**How to check it worked:** Reopen the page. **AirPlay Receiver** is off and **AirDrop** shows **Contacts Only**.

**If you don't see this:** You can also set AirDrop from **Control Center** (the two-switches icon in the top-right of your screen): click **AirDrop**, then **Contacts Only**.

**Heads-up:** You won't be able to show your iPhone screen on your Mac with AirPlay until you turn it back on. If a colleague isn't in your Contacts, they'll need to be added before they can AirDrop you something (on macOS 26.2 and later they can also use an AirDrop code).

### 9. Only allow apps from the App Store and known developers

**Why this matters:** This stops random, unchecked apps from running. It's one of the main things that protects Macs from fake "video player" or "cleaner" apps that are really malware.

**Steps**
1. Open **System Settings > Privacy & Security**.
2. Scroll down to **Security**.
3. Next to **Allow applications from**, choose **App Store & Known Developers**.

**How to check it worked:** It shows **App Store & Known Developers** (or the stricter **App Store**, which is also fine).

**Heads-up:** If you ever see a warning that an app "cannot be opened" or "could not be verified," stop. Don't look up ways around it. Ask IT first.

### 10. Require an admin password for system settings

**Why this matters:** This makes sure important settings (like the ones in this guide) can't be changed without an administrator password. It's extra protection if someone else uses your Mac.

**Steps**
1. Open **System Settings > Privacy & Security**.
2. Scroll to the bottom and click **Advanced**.
3. Turn on **Require an administrator password to access system-wide settings**.
4. Click **Done**.

**How to check it worked:** Reopen **Advanced**. The switch stays on.

**Heads-up:** You'll be asked for your password a bit more often when changing settings. In the same window, you'll also see **Log out automatically after inactivity**. Leave it off unless IT asks; it can close unsaved work.

### 11. Review which apps can see your screen, keyboard, files, camera and microphone

**Why this matters:** Some permissions are very powerful. An app with "Accessibility" or "Input Monitoring" access could read what you type, including passwords. Make sure only apps you trust have them.

**Steps**
1. Open **System Settings > Privacy & Security**.
2. Click each of these one at a time:
   - **Accessibility** (can control your Mac)
   - **Input Monitoring** (can see what you type)
   - **Screen & System Audio Recording** (can see your screen and hear system sound). On older versions this is called **Screen Recording**.
   - **Full Disk Access** (can read all your files)
   - **Microphone**
   - **Camera**
   - **Automation** (apps that can control other apps)
3. In each list, look at every app. Ask: do I recognise this app, and do I use it for something that needs this?
4. **Apps you know but no longer use:** turn their switch **off**. If you're sure you'll never need them, you can select the app and click the **minus (–)** button below the list.
5. **Names you don't recognise:** **don't switch them off yourself.** Take a screenshot and ask IT first. This matters most for anything that looks like a security, antivirus, VPN, remote-support or management tool, or an odd system-sounding name. Switching those off can quietly break your protection or IT's ability to help you.
6. For **Automation**, click the arrow next to an app to see what it can control. Turn off anything you know you don't need; ask IT about anything you don't recognise.

**What's normal:** video-call apps (Zoom, Teams, Meet) under Camera, Microphone and Screen Recording; password managers or accessibility tools under Accessibility; backup or security apps under Full Disk Access.

**How to check it worked:** Every app in these lists is one you know and use, or one IT has told you is fine.

**Heads-up:** If you turn off something you actually need, the app will stop working properly or ask you again. Just turn it back on.

### 12. Review apps that start by themselves

**Why this matters:** Some apps (and some nasty software) set themselves to run every time you log in, quietly, in the background. A quick look shows you what's running without you knowing.

**Steps**
1. Open **System Settings > General > Login Items & Extensions**. (On macOS 14 Sonoma and earlier it's called **Login Items**.)
2. Under **Open at Login**, look at the apps that open when you log in. To remove one you don't want, select it and click the **minus (–)** button.
3. Under **App Background Activity** (called **Allow in the Background** on Sequoia), look at the apps allowed to run in the background.
4. Turn off any you know you no longer use. If you don't recognise a name, take a screenshot and ask IT before turning it off.
5. Further down you'll see **Extensions**. These are add-ons that plug extra features into your Mac (for example, into Finder or the Share menu). You can click through them, but leave them as they are unless you're sure. Ask IT if something looks odd.

**How to check it worked:** Restart your Mac. Only apps you expect open on their own.

**Heads-up:**
- You need to be an administrator to change these settings. If you've switched to a standard account (step 21), your Mac will ask for the admin name and password.
- Turning off a background item for, say, a cloud-storage app means it won't sync until you open it. If something stops syncing, turn its switch back on.

### 13. Review browser extensions

**Why this matters:** Browser extensions can see every website you visit and sometimes what you type on them. Bad or abandoned extensions are a common way passwords get stolen.

**For each browser you use**, open its extensions list, then turn off or remove anything you don't recognise or don't use.

**Safari**
1. Open Safari. In the menu bar click **Safari > Settings**, then the **Extensions** tab.
2. To turn an extension off, untick the box next to its name. This is safe and easy, and you can tick it again later.
3. Removing it completely usually means deleting the app it came with. If you click **Uninstall**, Safari will probably tell you the extension is part of an app and offer **Show in Finder**. Only move that app to the Trash if you're sure you don't need it. If you're unsure, leave it unticked and ask IT.

**Google Chrome**
1. Click the **three dots** in the top-right, then **Extensions > Manage Extensions**.
2. Click **Remove** on anything you don't need.

**Microsoft Edge**
1. Click the **three dots** in the top-right, then **Extensions > Manage extensions**.
2. Click **Remove** on anything you don't need.

**Firefox**
1. Click the **three lines** in the top-right, then **Add-ons and themes**, then **Extensions**.
2. Click the **three dots** next to an extension and choose **Remove**.

**How to check it worked:** Each browser only lists (or only has switched on) extensions you know and use, such as your password manager.

**Heads-up:** Only install extensions from the browser's official store, and only ones you really need.

### 14. Turn on Find My Mac

**Why this matters:** If your Mac is lost or stolen, you can see where it is, make it play a sound, lock it or erase it from another device. It also stops a thief from simply wiping and reusing it.

**Check with IT first if this is a company-owned Mac.** Turning on Find My locks the Mac to whichever Apple Account you use (this is called **Activation Lock**). If that's your personal account, IT may not be able to erase, reset or set up the Mac later until you turn Find My off. Ask IT which Apple Account to use, or whether they want you to wait.

**Steps**
1. Open **System Settings** and click **your name** at the top of the sidebar.
2. Click **iCloud**.
3. Click **See All** (next to "Saved to iCloud"), then click **Find My Mac**.
4. Click **Turn On**. If asked to let Find My Mac use your Mac's location, click **Allow**.
5. Make sure location is on: open **System Settings > Privacy & Security > Location Services**, and turn on **Location Services**.

**How to check it worked:** Go to icloud.com/find on another device, or open the **Find My** app on your iPhone. Your Mac should appear on the map.

**If you don't see this:** If you're not signed in with an Apple Account, check with IT which account to use, then click **Sign in** at the top of the sidebar. If the button says **Show More Apps** instead of **See All**, click that. If Find My Mac says it's on but your Mac doesn't appear, turn it off and on again, then restart.

**Heads-up:** Before you sell or hand back this Mac, or if IT asks to set it up again, you'll need to turn Find My off (with your Apple Account password). Otherwise nobody else can use or reset it.

### 15. Stop Safari opening downloads automatically

**Why this matters:** By default Safari opens some downloaded files (like PDFs and zip files) by itself. Turning this off means nothing opens until you choose to open it.

**Steps**
1. Open Safari. In the menu bar click **Safari > Settings**, then the **General** tab.
2. Untick **Open “safe” files after downloading**.

**How to check it worked:** Download a PDF. It should appear in your Downloads folder without opening.

**Heads-up:** You'll need to double-click downloaded files yourself. That's it.

### 16. Remove unknown profiles

**Why this matters:** A "profile" is a small settings file that can change how your Mac works, for example routing your internet traffic somewhere else. Scammers sometimes trick people into installing them. On an unmanaged Mac there usually shouldn't be any, unless IT sent you one.

**Steps**
1. Open **System Settings > General > Device Management**.
2. Look at the list. If it says there are no profiles, you're done.
3. If you see a profile, click it to see who made it.
4. If it's from IT, or from an app you trust (like a VPN you use), leave it.
5. If you don't recognise it, **take a screenshot and contact IT before removing it.** If IT says it's safe to remove, select it and click the **minus (–)** button, then confirm.

**How to check it worked:** Only profiles you and IT recognise are listed.

**If you don't see this:** On older versions (macOS 14 Sonoma and earlier) this was in **System Settings > Privacy & Security > Profiles**. If there are no profiles at all, **Device Management** may not appear in the **General** list. That means you have none, which is fine.

**Heads-up:** Removing a profile removes everything it set up, such as a Wi-Fi network or email account.

### 17. Show file extensions in Finder

**Why this matters:** A file named "Invoice.pdf" could secretly be "Invoice.pdf.app", which is a program, not a document. Showing the full name helps you spot fakes.

**Steps**
1. Click on an empty part of your desktop, or open a **Finder** window.
2. In the menu bar click **Finder > Settings**.
3. Click the **Advanced** tab.
4. Tick **Show all filename extensions**.

**How to check it worked:** Files now show endings like **.pdf**, **.docx** or **.app**.

**Heads-up:** Be careful not to change the ending when renaming a file. If you do, your Mac will ask whether you're sure. Click the button that says **Keep** followed by the original ending (for example, **Keep .pdf**) to leave it as it was.

### 18. Check your Mac's built-in protection is on

**Why this matters:** Your Mac has a built-in safety lock called **System Integrity Protection** (SIP for short). It stops anything, even malware with your password, from changing the core parts of macOS. It's on by default and should stay on. This step is just a quick check.

**Steps (the easy way)**
1. Hold down the **Option** key, click the **Apple menu**, and choose **System Information**.
2. In the left list, under **Software**, click **Software** itself.
3. Look for **System Integrity Protection**. It should say **Enabled**.

**For the curious (optional)**
If you're comfortable with it, you can also open the **Terminal** app (in Applications > Utilities), type `csrutil status` and press Return. It should say **System Integrity Protection status: enabled.** Then close Terminal. Don't type anything else there.

**What about Startup Security?** Your Mac also has a setting called Startup Security, which controls what your Mac is allowed to start up from (for example, blocking an unknown USB drive from taking over at startup). It's on by default. IT checks this; you don't need to do anything.

**How to check it worked:** It says **Enabled**.

**If it says Disabled:** Don't try to fix it yourself. It has been switched off at some point. Please tell IT so they can turn it back on.

### 19. Turn on encrypted Time Machine backups

**Why this matters:** If your Mac breaks or is stolen, a backup means you don't lose your files. Encrypting the backup means nobody can read it if the drive goes missing.

**No external drive yet?** Do the rest of the guide, and come back to this step when you have one.

**What you need:** An external drive, ideally at least twice the size of your Mac's storage (for example, 2TB for a 1TB Mac). **Setting up a new drive for Time Machine may erase everything on it**, so use an empty one.

**Steps (setting up a new drive)**
1. Plug the drive into your Mac.
2. Open **System Settings > General > Time Machine**.
3. Click **Add Backup Disk** (or the **+** button).
4. Choose your drive and click **Set Up Disk**.
5. Turn on **Encrypt Backup**.
6. Create a password for the backup. **Save this password in your password manager.** Without it you can't restore your files.
7. Click **Done**. If asked to erase the disk, only click **Erase** if there's nothing on it you need.

**Already have an unencrypted Time Machine drive?** You don't need to erase it.
1. Plug it in and open a **Finder** window.
2. Control-click (or right-click) the backup drive in the Finder sidebar, then choose **Encrypt**.
3. Type a password in **Encryption password** and **Verify password**, add a hint, and click **Encrypt Disk**.
4. Save the password in your password manager. Your existing backups are kept.

**How to check it worked:** **Time Machine** shows your drive with the date of the latest backup. Plug the drive in regularly (once a week is a good habit).

**Heads-up:** Encrypting an existing drive can take hours. Keep it plugged in. (This only applies to a drive plugged into your Mac. A network backup drive, such as a Time Capsule, does have to start over when you encrypt it.)

### 20. Install the web filtering profile from IT (if IT sent you one)

**Why this matters:** IT may give you a small "web filtering" profile. It blocks known scam and malware websites before they even load, whatever browser you use. (Technically it changes your Mac's DNS, which is like the internet's phone book.)

**If IT has sent you a filtering profile, install it now. If not, skip this step.**

**Only do this with a link or file that IT sent you directly.** Never install a profile from a website pop-up or an unexpected email.

**Steps**
1. IT will send you a link or a file. It usually ends in **.mobileconfig**.
2. Open the link, or double-click the file. You may see a message that a profile was downloaded and needs to be reviewed in System Settings.
3. Open **System Settings > General > Device Management**.
4. Under **Downloaded**, double-click the profile.
5. Read the summary and check it matches what IT told you (the name, and who it's from).
6. Click **Install** (or **Continue**, then **Install**). Enter your Mac password if asked.

**How to check it worked:** The profile now appears in **Device Management** as installed. IT may give you a test website that should show as blocked.

**If you don't see this:** If the profile isn't listed under **Downloaded**, open the link or file from IT again.

**Heads-up:** Occasionally a safe site might be blocked by mistake. Tell IT and they can unblock it.

---

## Nice-to-have

### 21. Use a standard (non-admin) account day to day

**Why this matters:** An "admin" account can install software and change any setting. If you're tricked into running something bad while using an admin account, it can do much more damage. Using a "standard" account for everyday work, and a separate admin account only when needed, adds a safety step.

**Is this for me?** It's a great habit, but it is the most fiddly step in this guide. If it feels like too much, skip it. Everything else still counts. If you do it, set aside 20 minutes and have your passwords to hand.

**Steps**
1. **Create a separate admin account:**
   1. Open **System Settings > Users & Groups**.
   2. Click **Add User** and enter your password if asked.
   3. Choose **Administrator** as the account type (the label for this choice may be **New User** or similar; check: path may differ).
   4. Name it something clear like "Admin". Give it a strong password that's different from your daily one. Save that password in your password manager.
   5. Click the button to create the account (usually **Create User**; check: path may differ).
   6. **Don't sign this Admin account in to an Apple Account or iCloud.** It's only for typing in when your Mac asks for an administrator.
2. **Test the Admin account:** Restart your Mac. At the login screen, choose the Admin account and log in. This checks the password works and that the account can unlock the Mac at startup. If the Admin account doesn't appear on the startup screen, or its password doesn't work there, stop here and contact IT.
3. **While logged in to the Admin account, make your usual account standard:**
   1. Open **System Settings > Users & Groups**.
   2. Click the **i** button next to *your usual* account.
   3. Turn off **Allow this user to administer this computer**.
   4. Click **OK**, then restart your Mac and log back in to your usual account.

**How to check it worked:** In **Users & Groups**, your usual account now shows **Standard** and the new one shows **Admin**.

**Heads-up:**
- When you install apps or change some settings, your Mac will ask for an **administrator** name and password. Type the Admin account's name and password, not your own.
- Don't do step 3 until you've confirmed the Admin account works. If you get this wrong you could lock yourself out of admin tasks.
- Some apps that install background tools may need the admin password more often.
- If you get stuck, stop and contact IT.

### 22. Set a lock screen message

**Why this matters:** If you lose your Mac, an honest finder can see how to return it.

**Steps**
1. Open **System Settings > Lock Screen**.
2. Turn on **Show message when locked**, then click **Set**.
3. Type something like "If found, please call [work phone number]." Don't include your home address.
4. Click **Done**.

**How to check it worked:** Lock your screen (Control + Command + Q). Your message appears.

---

## Only if IT tells you to

These are strong protections for people who are at higher risk, such as those who handle very sensitive information or may be targeted personally. They have real downsides, so **only turn them on if IT asks you to.**

### 23. Lockdown Mode

**What it is:** An extreme protection mode for people who might be targeted by sophisticated spyware. It switches off many features that attackers could use.

**Steps**
1. Open **System Settings > Privacy & Security**.
2. Scroll down to **Lockdown Mode** and click **Turn On**.
3. Enter your password if asked, then click **Turn On & Restart**.

**Downsides:** Some websites load slower or look broken. Most message attachments are blocked. FaceTime calls from people you haven't called before are blocked. Shared albums and some device connections stop working. You need to turn it on separately on each of your devices (Mac, iPhone, iPad). Phone calls, normal messages and emergency features keep working.

**How to check it worked:** **Privacy & Security** shows Lockdown Mode as on.

### 24. Advanced Data Protection for iCloud

**What it is:** Normally, Apple can help you recover some iCloud data (like Photos and Notes) if you lose access. With Advanced Data Protection, almost all your iCloud data is locked so that only your devices can open it, not even Apple.

**Before you start:** Update **all** your Apple devices first. You must set up a **recovery contact** (a trusted person) or a **recovery key**, or both.

**Steps**
1. Open **System Settings**, click **your name**, then **iCloud**.
2. Click **Advanced Data Protection**, then **Turn On**.
3. Follow the steps on screen to set up your recovery method.

**Downsides:** **If you lose access to your devices and your recovery method, Apple cannot get your data back.** Viewing iCloud data on the iCloud.com website needs extra steps. Some features may not be available in every country.

**How to check it worked:** **iCloud > Advanced Data Protection** shows it as on.

### 25. Security keys for your Apple Account

**What it is:** A security key is a small physical device (like a USB stick) that you plug in or tap to sign in to your Apple Account. It replaces the six-digit codes and stops fake "Apple" websites from stealing your sign-in.

**What you need:** At least two security keys that work with Apple devices (Apple calls them "FIDO Certified"). IT will tell you which to use.

**Steps**
1. Open **System Settings**, click **your name**, then **Sign-In & Security**.
2. Click **Two-Factor Authentication**.
3. Next to **Security Keys**, click **Set Up** and follow the steps to add both keys.
4. At the end you'll see a list of devices signed in to your Apple Account. Keep the ones you use; sign out any you don't recognise.

**Downsides:**
- **If you lose all your keys, you could be locked out of your Apple Account.** Keep the spare somewhere safe, away from the main one.
- Every device signed in to your Apple Account must be on macOS 13.2, iOS 16.3 or iPadOS 16.3 or later.
- Devices you haven't used for more than 90 days get signed out during setup. If one can't be updated, you won't be able to sign back in on it.
- You'll need a key to sign in on new devices or on the web.

**How to check it worked:** **Sign-In & Security > Two-Factor Authentication** lists your security keys.

---

## You're done

Thanks for taking the time. Your Mac is now much harder to break into and much easier to recover if something goes wrong.

**Keep these habits:**
- Install updates when your Mac asks.
- Lock your screen when you walk away (Control + Command + Q).
- Never install anything a pop-up or unexpected email tells you to.
- If something looks wrong, ask IT (see "How to reach IT" at the top). There are no silly questions.
