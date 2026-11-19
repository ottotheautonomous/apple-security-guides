# Securing Your Mac: A Step-by-Step Guide

## What this is

Nobody has switched on this Mac's security settings for you. On a company-managed Mac, IT does that remotely. On yours, you'll do it yourself with this guide, one setting at a time.

You don't need to be "good with computers." Every step tells you exactly what to click. Words in **bold** are the exact words you'll see on screen. A path like **System Settings > General > Software Update** means: open System Settings, click **General**, then click **Software Update**.

This guide is written for **macOS 26 Tahoe**. If your Mac is still on **macOS 15 Sequoia**, it mostly looks the same. Where something has a different name, we say so.

Some steps end with a **Going further** box. It stays closed until you click it, and holds extra protection for people who are comfortable with tech. Everyone else can skip these boxes: the main steps already protect you well.

## How long it takes

- **Must-do section:** about 60 to 75 minutes, plus time for the update to install and the first backup to run.
- **Nice-to-have section:** about 25 minutes.
- You don't have to do it all in one go. The checklist below helps you keep your place.

## What to have ready

- **Your Mac login password** (the one you type to unlock your Mac).
- **Your Apple Account password** (what Apple used to call your Apple ID). You'll need it for Find My Mac and some of the later steps.
- **Your charger.** Plug your Mac in. Updates and encryption won't run properly on battery.
- **A safe place to save a recovery key**, such as a password manager, or paper you can lock away. You'll need this in step 2.
- **An external drive** for backups (step 19). If you have one, **do step 19 first**, before step 0. No drive yet? Carry on, and do step 19 as soon as you have one.
- **The link or file from IT** for the web filtering profile (step 20), if IT has sent you one.

> **Note:** The carrier-lock step in the iPhone guide (step 11) needs your phone carrier login. You don't need it for the Mac.

> **How to reach IT**
> - Email: `[IT email address]`
> - Phone: `[IT phone number]`
>
> Whenever this guide says "ask IT" or "contact IT," this is who to contact.
>
> **No IT department?** (For example, this is your own or a relative's Mac.) Wherever this guide says "ask IT", ask a family member or friend you trust instead. Skip the parts that only apply if IT sends you something, and the "Only if IT tells you to" part, apart from the one exception it names.

## How to open System Settings

You'll use this a lot. Click the **Apple menu** (the apple logo, top-left corner of the screen) and choose **System Settings**. The list down the left side is called the **sidebar**. If you can't see an item, scroll down in the sidebar. You can also type its name in the **Search** box at the top of the sidebar.

---

## Checklist

Tick each box as you go.

**Short on time?** The steps that protect you most are **0** and **1** (updates), **2** (FileVault), **14** (Find My Mac) and **19** (backups). Do those first. Then work through the rest in order, a few at a time. Most take only a minute or two.

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

**Going further:**
- **Only update from Apple's own screens.** Real macOS updates come from **System Settings > General > Software Update** or the **App Store**. A website pop-up saying your Mac "needs an update" or is "infected" is fake. Close the tab, and never download the "update" it offers.
- **Install urgent fixes the same day.** Apple lists its security fixes at **support.apple.com/100100**. When the notes for an update say Apple is aware the problem "may have been exploited", attackers are already using it. Install that update today instead of waiting for the weekend.
- **Know when your Mac stops getting fixes.** Apple gives the full set of security fixes only to the newest macOS. Older versions get some fixes for a while, then none. If your Mac can't move to macOS 26, ask IT when it should be replaced, so you're not left on a Mac that no longer gets fixes.

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

**Part C: Background Security Improvements (macOS 26.1 and later)**
1. Open **System Settings > Privacy & Security**.
2. Scroll down to **Background Security Improvements** and make sure **Automatically Install** is on. This lets Apple send small, urgent security fixes between normal updates. If it's off, you only get those fixes with the next full update.

**How to check it worked:** Click the **i** next to **Automatic Updates** again and confirm all three switches are on. Then reopen **App Store > Settings** and confirm **Automatic Updates** is still ticked. On macOS 26.1 or later, also check that **Automatically Install** is on under **Background Security Improvements**.

**If you don't see this:** On macOS 15 Sequoia, the **i** window in Part A also has **Check for updates** and **Install application updates from the App Store**. Turn those on too (the second one does the same job as Part B). If there's no **Background Security Improvements** in **Privacy & Security**, your Mac is on macOS 26.0 or older. Install any update step 0 offers, then look again. On macOS 15 Sequoia, skip Part C.

**Heads-up:** Your Mac may restart overnight to finish an update. Save your work before you leave it. Laptops only download updates when plugged in. Apps you installed from websites (not the App Store) update separately: accept their update prompts, or look in their menu for "Check for Updates."

**Going further:**
- **Give apps from websites a monthly check.** Browsers and apps you downloaded yourself update separately. Once a month, open each one's **About** or **Check for Updates** menu (in Chrome: **three dots > Help > About Google Chrome**) and install what it finds. Then quit and reopen the app: most updates only take effect after a restart.
- **Remove apps you no longer use.** An app you never open still needs updates, and abandoned apps stop getting them. Drag unused apps from **Applications** to the Trash. The trade-off: you'll need to download one again if you change your mind. On a work Mac, ask IT before removing anything you didn't install yourself.

### 2. Turn on FileVault (disk encryption) and save your recovery key

**Why this matters:** If your Mac is lost or stolen, FileVault scrambles everything on it so no one can read your files without your password. Without it, someone who steals your Mac has a much easier time getting at your files.

**What's a recovery key?** It's a long code of letters and numbers. It's your spare key. If you ever forget your Mac password, the recovery key (or your Apple Account, if you chose that option) gets you back in. **If you lose your password and every way back in, your files are gone for good.** Not even Apple can get them back.

**Before you start:** If you have a backup drive, do step 19 (backups) before this step. Then, if anything goes wrong with your password or recovery key, your files are safe on the drive.

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

**Going further:**
- **Check that your recovery key really works.** This only applies if your Mac gave you a recovery key. If you chose the iCloud option and never saw a key, skip this. Open **Terminal** (in **Applications > Utilities**), type `sudo fdesetup validaterecovery` yourself, exactly as shown here, and press Return. Type your Mac password (nothing shows as you type), then your recovery key with its dashes. **true** means the key is correct. If it says **false**, don't turn FileVault off: contact IT. Check again if your Mac ever gives you a new key. When you're done, close Terminal. Don't type anything else there.
- **Shut down, don't just close the lid, when the Mac is at risk.** While your Mac is asleep, the disk is still unlocked inside it. When it's fully shut down, FileVault locks everything until someone types the password. Shut down before you leave it in a car or hotel room, or carry it through airport checks. The trade-off: it takes a little longer to start.
- **Don't look for a firmware password on newer Macs.** Macs with Apple chips (M1 and later) don't have one. The closest thing, **Recovery Lock**, can only be set by IT's device management. For you, FileVault plus Find My Mac (step 14) is the protection. Older Intel Macs do have a firmware password, but forgetting it can mean a trip to Apple with proof of purchase, so ask IT before setting one.

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

**Going further:**
- **Block everything coming in on risky Wi-Fi.** In **System Settings > Network > Firewall > Options**, turn on **Block all incoming connections**. Browsing, email and most video calls still work. The trade-off: Screen Sharing, File Sharing and some apps that other devices connect to stop working, so you may want to turn it off again at home.
- **Tidy the allowed list.** The same **Options** window lists apps you've allowed to accept connections. Select any you no longer use and click the **minus (–)** button. If one is needed, the Mac will simply ask again. Ask IT about names you don't recognise before removing them.
- **Watch what goes out, too.** The built-in firewall only checks connections coming in. A free tool called **LuLu** (from Objective-See, at objective-see.org) asks you each time an app tries to connect out, which can catch software quietly sending your data away. **Little Snitch** does the same and costs money. The trade-off: lots of questions in the first few days, and blocking the wrong thing can break updates. On a work Mac, ask IT first.

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
- **On macOS 26 Tahoe:** open **System Settings > Wallpaper**, then click **Screen Saver** (you may need to scroll down). Choose a screen saver, and set **Start Screen Saver** to 10 minutes or less.
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

**Going further:**
- **Lock by moving the pointer into a corner.** Open **System Settings > Desktop & Dock**, scroll down and click **Hot Corners**. Pick a corner and choose **Lock Screen**. To avoid locking by accident, hold **Command** (or another key) while you choose it. Then the corner only works while you hold that key down.
- **Use a login password you use nowhere else.** Your Mac password should be different from your Apple Account password and from every website password. If one of them leaks, the others stay safe. Your password manager can remember them for you.
- **Shorten the timer.** In **System Settings > Lock Screen**, set both **Turn display off** options to **For 2 minutes** or **For 5 minutes** instead of 10. A shorter gap gives someone less time at an unlocked Mac. The trade-off: the screen goes dark while you're reading, so you'll unlock more often. Touch ID makes that quick.

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

**Going further:**
- **Make the login screen ask for a name too.** In **System Settings > Lock Screen**, set **Login window shows** to **Name and password**. Someone at your Mac then has to guess your account name as well as your password. The trade-off: you type your account name when switching users. The screen right after a restart may still show your name, because of FileVault.
- **Turn off password hints.** In the same place, turn off **Show password hints**. A hint can help someone who knows you guess your password. The hint you added in step 4 then won't show, so make sure the password is saved in your password manager first.
- **Lend your Mac with its own account.** If someone uses your Mac often, give them their own **Standard** account in **System Settings > Users & Groups > Add User**, not access to yours. The trade-off: every account added this way can also unlock the Mac at startup, so only add people you trust, and remove the account when they no longer need it.

### 6. Check for unknown accounts

**Why this matters:** An extra account you didn't create, especially an "Admin" one, could let someone else control your Mac. It's rare, but worth a 30-second look.

**Steps**
1. Open **System Settings > Users & Groups**.
2. Look at the list of users. Each one shows **Admin** or **Standard** under its name.
3. Ask yourself: do I know every account here?
4. If you see one you don't recognise, **don't delete it yourself.** Write down its name and contact IT. Some are created by IT or by apps on purpose.
5. Now check your Apple Account. In **System Settings**, click **your name** at the top of the sidebar, then click **Sign-In & Security**. (Not signed in with an Apple Account? Skip this and the next item.)
6. Make sure **Two-Factor Authentication** says **On**, and that every phone number listed is yours or belongs to someone you really trust. If a number isn't, contact IT, or remove it from your iPhone (**iPhone guide, step 6b**). If you have an iPhone, the **iPhone guide, step 6** covers your Apple Account in full.

**How to check it worked:** Every account is one you (or IT) set up. Two-factor authentication is on, and every trusted phone number is one you know.

**Heads-up:** Deleting an account can delete its files. Leave this to IT if you're unsure.

**Going further:**
- **See accounts the settings page doesn't show.** Open **Terminal**, type `dscl . list /Users | grep -v '^_'` and press Return. You'll see **daemon**, **nobody** and **root**, which every Mac has, plus your own accounts. Anything else you don't recognise: take a screenshot and ask IT. Don't delete it yourself.
- **Check who has admin rights.** In Terminal, type `dscl . -read /Groups/admin GroupMembership` and press Return. It should list **root** and only the admin accounts you know about. An unknown name here is worth a call to IT straight away. Type these commands exactly as shown here, then close Terminal. Don't type anything else there, and never paste a command someone else sends you.
- **Check the devices on your Apple Account.** Open **System Settings**, click **your name**, and scroll down to the list of devices. If you see one that isn't yours, click it and choose **Remove from Account**, then change your Apple Account password.

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

**Going further:**
- **Give your Mac a name that doesn't say who you are.** A name like "Jane's MacBook Pro" is visible to others on café and hotel Wi-Fi. Change it in **System Settings > General > About > Name**. Then, in **General > Sharing**, check **Local hostname** at the bottom. If it still shows your name, click **Edit** and change it too. The trade-off: it may be harder to spot in a list. On a work Mac, ask IT first, as they may use the name to find it.
- **If you need a sharing service, narrow it.** Click the **i** next to that service (for example **Screen Sharing** or **Remote Login**). Where you see **Allow access for**, choose **Only these users** and add just yourself. Turn the service off again when you're done.
- **Look again after installing support tools.** Remote-support and file-sync apps sometimes switch sharing services on during setup. After installing one, reopen **General > Sharing** and check nothing has turned on that you didn't expect.

### 8. Turn off AirPlay Receiver and set AirDrop to Contacts Only

**Why this matters:** AirPlay Receiver lets nearby devices send video and sound to your Mac. AirDrop set to "Everyone" lets strangers on a train send you pictures or files out of the blue.

**Steps**
1. Open **System Settings > General > AirDrop & Continuity**. On macOS 15 Sequoia this is called **AirDrop & Handoff**.
2. Turn off **AirPlay Receiver**.
3. Next to **AirDrop**, choose **Contacts Only**.

**How to check it worked:** Reopen the page. **AirPlay Receiver** is off and **AirDrop** shows **Contacts Only**.

**If you don't see this:** You can also set AirDrop from **Control Center** (the two-switches icon in the top-right of your screen): click **AirDrop**, then **Contacts Only**.

**Heads-up:** You won't be able to show your iPhone screen on your Mac with AirPlay until you turn it back on. If a colleague isn't in your Contacts, they'll need to be added before they can AirDrop you something (on macOS 26.2 and later they can also use an AirDrop code).

**Going further:**
- **If you turn AirPlay Receiver back on, lock it down.** In **System Settings > General > AirDrop & Continuity**, set **Allow AirPlay for** to **Current User**. Then only devices signed in to your own Apple Account can use it. Also turn on **Require password** and set one. Turn it off again when you're done. The trade-off: guests can't show their screen on your Mac.
- **Turn AirDrop off when you're not using it.** Next to **AirDrop**, choose **No One**. Nobody can send you anything, not even contacts. Switch it back to **Contacts Only** when you want to receive something. The trade-off: one extra step each time.

### 9. Only allow apps from the App Store and known developers

**Why this matters:** This stops random, unchecked apps from running. It's one of the main things that protects Macs from fake "video player" or "cleaner" apps that are really malware.

**Steps**
1. Open **System Settings > Privacy & Security**.
2. Scroll down to **Security**.
3. Next to **Allow applications from**, choose **App Store & Known Developers**.

**How to check it worked:** It shows **App Store & Known Developers** (or the stricter **App Store**, which is also fine).

**Heads-up:** If you ever see a warning that an app "cannot be opened" or "could not be verified," stop. Don't look up ways around it. Ask IT first.

**Going further:**
- **Check who made an app before you trust it.** Open **Terminal**, type `spctl -a -vv ` (with a space at the end), drag the app from **Applications** into the Terminal window, and press Return. A safe app says **accepted**, and the **origin** line names the company you expected (App Store apps show Apple). If it says **rejected**, or names someone else, don't open it. Ask IT. Then close Terminal. Don't type anything else there.
- **Go stricter with "App Store" only.** Choosing **App Store** blocks every new app from a website. The trade-off: to install something like Chrome or Zoom later, you'll have to switch back to **App Store & Known Developers**, and it's easy to forget to switch again afterwards.
- **Never paste commands a website or installer gives you.** A common trick is a page that says "to fix this" or "to verify you're human", copy this line into **Terminal**. That line installs malware and skips every check in this step. No real website needs you to do that. Close the page and ask IT. Only type Terminal commands from this guide or from IT.

### 10. Require an admin password for system settings

**Why this matters:** This makes sure important settings (like the ones in this guide) can't be changed without an administrator password. It's extra protection if someone else uses your Mac.

**Steps**
1. Open **System Settings > Privacy & Security**.
2. Scroll to the bottom and click **Advanced**.
3. Turn on **Require an administrator password to access system-wide settings**.
4. Click **Done**.

**How to check it worked:** Reopen **Advanced**. The switch stays on.

**Heads-up:** You'll be asked for your password a bit more often when changing settings. In the same window, you'll also see **Log out automatically after inactivity**. Leave it off unless IT asks; it can close unsaved work.

**Going further:**
- **Make this password different from your daily one.** If your everyday account is an admin, this step asks for your own password, which someone who watched you type it already knows. Step 21 sets up a separate admin account so this lock really needs a second password. The trade-off: you type that admin password a little more often.
- **Approve new USB devices (Mac laptops with Apple chips).** In **System Settings > Privacy & Security**, check that **Allow accessories to connect** says **Ask for New Accessories**, not **Always Allow** (called **Always** on some versions). Then an unknown cable or USB stick can't swap data with your Mac until you click **Allow**. It can still charge. The trade-off: you approve each new dock or drive once. Desktop Macs don't have this setting.
- **If you think someone is targeting you personally,** read step 23 (Lockdown Mode) and talk to IT. It goes much further than the settings here.

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

**Going further:**
- **Watch the menu bar.** An **orange dot** means an app is using the microphone. The camera's **green light** means it's on. A **purple icon** means something is recording the screen. Click **Control Center** to see which app it is. If you didn't expect it, quit that app and check its permissions here.
- **Check the quieter lists too.** In **Privacy & Security**, also look at **Files & Folders**, **App Management** (apps that can update or delete other apps), **Local Network**, **Bluetooth** and **Location Services**. Use the same rule: keep what you know and use, and ask IT about names you don't recognise.
- **Share less with Apple and Siri.** In **Privacy & Security > Analytics & Improvements**, you can turn off **Share Mac Analytics** and **Improve Siri & Dictation**. Your Mac and Siri keep working the same. It just sends less about how you use them.
- **Make it a habit.** Repeat this check a few times a year, and right after installing new software. Most apps ask for one of these permissions on first use, and it's easy to click **Allow** without thinking.

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

**Going further:**
- **See everything that starts by itself, not just what Settings shows.** **KnockKnock**, a free tool from **objective-see.org**, lists every item set to start automatically, including some that **Login Items & Extensions** doesn't show. The trade-off: the list is long and mostly normal Apple items. Don't delete anything from it. If a name looks odd, take a screenshot and ask IT. Check the site says it supports your version of macOS. On a work Mac, ask IT first.
- **Get a warning the moment something sets itself to start.** **BlockBlock**, also free from **objective-see.org**, pops up when an app tries to add itself to your start-up list, and lets you block it. The trade-off: it also pops up during normal installs and updates, so you need to read each alert, and it needs **Full Disk Access** to work. On a work Mac, ask IT first.
- **Don't swipe away "Background Items Added".** Your Mac shows this notification when an app adds itself to run in the background. If you just installed that app, it's normal. If you didn't install anything, open **System Settings > General > Login Items & Extensions** and check the list.
- **Peek in the folders where start-up files live.** In Finder, choose **Go > Go to Folder** and type **/Library/LaunchAgents**, then **/Library/LaunchDaemons**, then **~/Library/LaunchAgents**. Names like **com.google...** or **com.microsoft...**, from companies whose apps you use, are normal. Don't move or delete anything here yourself: ask IT about names you don't recognise.

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

**Going further:**
- **Let extensions see only the sites they need.** In Safari, open **Safari > Settings > Extensions**, select an extension, click **Edit Websites**, and set **When visiting other websites** to **Ask**. In Chrome, click **Details** on the extension in **Manage Extensions**, then set **Site access** to **On click** or **On specific sites**. The trade-off: you'll click to allow the extension more often.
- **Use a separate browser profile for banking.** A profile is like a second, clean copy of your browser with its own cookies and extensions. In Safari, go to **Safari > Settings > Profiles** and click **New Profile**, then turn on only your password manager in that profile's **Extensions** tab. In Chrome, click your profile picture in the top-right and choose the option to add a new profile. The trade-off: you have to switch to that window for banking.
- **Fewer is safer.** Extensions are sometimes sold to new owners who quietly add tracking or worse. If an extension suddenly asks for new permissions after an update, or you can't remember why you have it, remove it. Most people only need their password manager.
- **On a work Mac, ask IT before adding any new extension.** Some companies only allow approved ones.

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

**Going further:**
- **Learn the buttons before you need them.** Open the **Find My** app on your iPhone, tap **Devices**, then your Mac. Look (don't tap) at **Mark As Lost**, which locks the Mac and shows a message with your phone number, and **Erase This Device**. When you're upset after a theft, it helps to already know where they are.
- **If it's stolen, don't remove it from your account.** Keep the Mac listed in Find My, even after you erase it. That keeps **Activation Lock** on, so a thief can't set it up as their own. Only remove it once you've sold it, given it away or handed it back, as described in this step.
- **Save your serial number somewhere else.** Click the **Apple menu > About This Mac** and copy the **Serial number** into your password manager, with a photo of the receipt. Police, insurers and IT will ask for it.
- **Check Activation Lock is really on.** Hold **Option**, click the **Apple menu**, choose **System Information**, then click **Hardware**. **Activation Lock Status** should say **Enabled**.

### 15. Stop Safari opening downloads automatically

**Why this matters:** By default Safari opens some downloaded files (like PDFs and zip files) by itself. Turning this off means nothing opens until you choose to open it.

**Steps**
1. Open Safari. In the menu bar click **Safari > Settings**, then the **General** tab.
2. Untick **Open “safe” files after downloading**.
3. Click the **Security** tab and make sure **Warn when visiting a fraudulent website** is ticked. Safari then warns you before it opens a known scam site.

**How to check it worked:** Download a PDF. It should appear in your Downloads folder without opening. In **Safari > Settings > Security**, **Warn when visiting a fraudulent website** is ticked.

**Heads-up:** You'll need to double-click downloaded files yourself. That's it.

**Going further:**
- **Make websites ask before they download anything.** Open **Safari > Settings > Websites**, click **Downloads** in the list, and set **When visiting other websites** to **Ask**. A page then can't drop a file on your Mac without you clicking. The trade-off: one extra click each time on sites you haven't allowed.
- **Look before you open.** Select a downloaded file in Finder and press the **Space bar**. This shows a preview (Apple calls it Quick Look) without opening it in an app. If a "PDF" won't preview, or turns out to be an app, delete it.
- **Check where a file came from.** Select the file in Finder, choose **File > Get Info**, and look at **Where from**. If an "invoice" came from a web address you don't recognise, don't open it. Not every file shows this line.
- **Never paste a command a website gives you.** A common Mac trick is a fake "I'm not a robot" or install page that tells you to open **Terminal** and paste something. The **Staying safe online guide, step 7** shows what it looks like.

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

**Going further:**
- **Check the other places your internet can be redirected.** Open **System Settings > Network** and look at **VPN & Filters** (on some versions just **VPN**). Anything listed should be IT's filter (step 20), a VPN you chose, or a security app you installed on purpose. Then click **Wi-Fi**, then **Details** next to your network, then **Proxies**: everything should be off unless IT set it. Take a screenshot and ask IT about anything else.
- **Check your iPhone too.** Scammers who get one device often try the other. The **iPhone guide, step 13a** shows where profiles live there.
- **Look again after a scare.** If someone "helped" you over the phone, or you installed something from an email or pop-up, repeat this step and step 12 the same day.

### 17. Show file extensions in Finder

**Why this matters:** A file named "Invoice.pdf" could secretly be "Invoice.pdf.app", which is a program, not a document. Showing the full name helps you spot fakes.

**Steps**
1. Click on an empty part of your desktop, or open a **Finder** window.
2. In the menu bar click **Finder > Settings**.
3. Click the **Advanced** tab.
4. Tick **Show all filename extensions**.

**How to check it worked:** Files now show endings like **.pdf**, **.docx** or **.app**.

**Heads-up:** Be careful not to change the ending when renaming a file. If you do, your Mac will ask whether you're sure. Click the button that says **Keep** followed by the original ending (for example, **Keep .pdf**) to leave it as it was.

**Going further:**
- **Show what kind of file it really is.** In a Finder window, choose **View > as List**. If there's no **Kind** column, Control-click a column heading and tick **Kind**. A real document says something like **PDF document**. If it says **Application** and you expected a document, don't open it.
- **See where a file really is.** Choose **View > Show Path Bar**. The bar at the bottom shows which folder or disk a file is in. If a "document" turns out to be on a disk you just downloaded, rather than in your Downloads folder, be careful before opening it.
- **Tidy up installers.** After installing an app, eject the installer (the **.dmg** disk in the Finder sidebar) and move the **.dmg** file to the Trash. Old installers left in Downloads are easy to open by mistake later.

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

**Going further:**
- **Look at Startup Security without restarting (Apple silicon).** Hold **Option**, click the **Apple menu**, choose **System Information**, then under **Hardware** click **Controller**. Look for **Secure Boot**: it should say **Full Security**. If it says anything else, tell IT. Don't try to change it yourself.
- **Know what's not there.** Newer Macs with Apple silicon don't have the old "firmware password". The closest feature, **Recovery Lock**, can only be set by a company's management system. Your login password, FileVault (step 2) and Find My (step 14) are what protect this Mac. On an older Intel Mac, ask IT whether they want a firmware password.
- **Make every accessory ask first (Mac laptops with Apple silicon).** In **System Settings > Privacy & Security**, find **Allow accessories to connect** and choose **Ask Every Time** (on some versions **Always Ask**). Never choose **Always Allow**. A cable or gadget plugged in while you're away then can't connect until you approve it, even one you've used before. The trade-off: you approve your dock, hub or backup drive each time. Desktop Macs don't have this setting.
- **For people at higher risk, there's Lockdown Mode.** It's step 23, and only for when IT tells you to.

### 19. Turn on encrypted Time Machine backups

**Why this matters:** If your Mac breaks or is stolen, a backup means you don't lose your files. Encrypting the backup means nobody can read it if the drive goes missing.

**No external drive yet?** Do the rest of the guide, and come back to this step as soon as you have one. If you already have a drive, do this step first, before the others.

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

**Going further:**
- **Keep a second copy somewhere else.** A fire or burglary can take the Mac and the backup drive together. Time Machine can use two drives and takes turns between them: add the second one in **System Settings > General > Time Machine** with **Add Backup Disk**, turn on **Encrypt Backup** for it too, and keep it at another place (work or a relative's house). Swap them every few weeks. The trade-off: a second drive costs money and you have to remember to swap.
- **Test that you can get a file back.** Open a folder in Finder, then open the **Time Machine** app (in **Applications**). Go back in time, pick a file and click **Restore**. A backup you've never restored from is only a hope.
- **Unplug the drive after the backup finishes.** Harmful software that scrambles your files can also reach a drive that's always plugged in. Eject it in Finder, then unplug it. Plug it back in at least once a week, as in the main step.
- **iCloud Drive isn't a backup.** If you delete or damage a file, iCloud copies that change to all your devices. A paid online backup service is a good offsite copy, but on a work Mac ask IT first: company files may not be allowed there.

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

**Going further:**
- **Keep Safari's own scam warning on.** You turned it on in step 15. It works with IT's filter or without one, so leave it on.
- **Check the filter now and then.** Open **System Settings > General > Device Management** and make sure IT's profile is still listed. If IT gave you a test website, open it every few months: it should still be blocked. If it isn't, tell IT.
- **Ask IT before turning on iCloud Private Relay.** Private Relay (part of the paid iCloud+ plan) hides your Safari browsing from the network you're on. It can also change how web filtering works. Ask IT whether they're happy for you to use both.
- **If a site is blocked, don't work around it.** Don't remove the profile, switch to another DNS service or use a VPN to reach a blocked site. Tell IT which site it was, and they can check it and unblock it if it's safe.

---

## Nice-to-have

### 21. Use a standard (non-admin) account day to day

**Why this matters:** An "admin" account can install software and change any setting. If you're tricked into running something bad while using an admin account, it can do much more damage. Using a "standard" account for everyday work, and a separate admin account only when needed, adds a safety step.

**Is this for me?** It's a great habit, but it is the most fiddly step in this guide. If it feels like too much, skip it. Everything else still counts. If you do it, set aside 20 minutes and have your passwords to hand.

**Steps**
1. **Create a separate admin account:**
   1. Open **System Settings > Users & Groups**.
   2. Click **Add User** and enter your password if asked.
   3. Click the pop-up menu next to **New User** and choose **Administrator**.
   4. Name it something clear like "Admin". Give it a strong password that's different from your daily one. Save that password in your password manager.
   5. Click **Create User**.
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
- Don't make your usual account standard (part 3 above) until you've confirmed the Admin account works. If you get this wrong you could lock yourself out of admin tasks.
- Some apps that install background tools may need the admin password more often.
- If you get stuck, stop and contact IT.

**Going further:**
- **Never use the Admin account for daily life.** Only type its name and password into the boxes that ask for an administrator. Don't log in to it to browse, read email or open downloads. If you do, you lose most of the benefit of this step.
- **Keep a second copy of the Admin password away from the Mac.** If your password manager only works on this Mac and something goes wrong, you can't get in to read it. Keep a paper copy locked away, for example with your FileVault recovery key (step 2).
- **Give everyone their own standard account.** If family members use this Mac, give each of them their own **Standard** account, not yours and not the Admin one. Then their downloads and mistakes mostly stay in their own account. Check **Users & Groups** now and then: only the Admin account should show **Admin** (step 6 covers unknown accounts).

### 22. Set a lock screen message

**Why this matters:** If you lose your Mac, an honest finder can see how to return it.

**Steps**
1. Open **System Settings > Lock Screen**.
2. Turn on **Show message when locked**, then click **Set**.
3. Type something like "If found, please call [work phone number]." Don't include your home address.
4. Click **Done**.

**How to check it worked:** Lock your screen (Control + Command + Q). Your message appears.

**Going further:**
- **Hide account names at the login screen.** Open **System Settings > Lock Screen** and set **Login window shows** to **Name and password**. Someone who picks up your Mac then has to guess your account name as well as your password. The trade-off: you type your name too. On a Mac with FileVault, the first screen after start-up still shows the names of people who can unlock it.
- **Add a label for when the battery is flat.** The lock screen message only shows when the Mac is switched on. A small sticker or engraving on the bottom with a work phone number or email works even with a dead battery. Don't put your home address on it.
- **You can also send a message after it's lost.** **Mark As Lost** in the **Find My** app (step 14) shows a message and phone number on the screen, even if you never set one here.

---

## Only if IT tells you to

These are strong protections for people who are at higher risk, such as those who handle very sensitive information or may be targeted personally. They have real downsides, so **only turn them on if IT asks you to.**

**One exception:** security keys (step 25) on a personal Apple Account. If you're comfortable with tech, you can add them yourself after reading the downsides. If you use that Apple Account on any device you use for work, ask IT first.

### 23. Lockdown Mode

**What it is:** An extreme protection mode for people who might be targeted by sophisticated spyware. It switches off many features that attackers could use.

**Before you start:** If IT sent you a web filtering profile (step 20), install it **first**. You can't install profiles while Lockdown Mode is on. If you need one later, turn Lockdown Mode off, install it, then turn Lockdown Mode back on.

**Steps**
1. Open **System Settings > Privacy & Security**.
2. Scroll down to **Lockdown Mode** and click **Turn On**.
3. Enter your password if asked, then click **Turn On & Restart**.

**Downsides:** Some websites load slower or look broken. Most message attachments are blocked. FaceTime calls are blocked from people you haven't called in the past 30 days. Shared albums and some device connections stop working. You need to turn it on separately on each of your devices (Mac, iPhone, iPad). Phone calls, normal messages and emergency features keep working.

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

**What you need:** At least two security keys that work with Apple devices (Apple calls them "FIDO Certified"). For a work account, IT will tell you which to use.

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
