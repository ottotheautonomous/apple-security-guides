# Securing Your Mac: A Step-by-Step Guide

## What this is

Nobody has switched on this Mac's security settings for you. On a company-managed Mac, IT does that remotely. On yours, you'll do it yourself with this guide, one setting at a time.

You don't need to be "good with computers." Every step tells you exactly what to click. Words in **bold** are the exact words you'll see on screen. A path like **System Settings > General > Software Update** means: open System Settings, click **General**, then click **Software Update**.

This guide is written for **macOS 27 Golden Gate**. If your Mac is still on **macOS 26 Tahoe** or **macOS 15 Sequoia**, it mostly looks the same. Where something has a different name, we say so. Macs with an Intel chip can't run macOS 27, so they stay on Tahoe or an older version.

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
> **No IT department?** (For example, this is your own or a relative's Mac.) Wherever this guide says "ask IT", ask a family member or friend you trust instead. Skip the parts that only apply if IT sends you something. The "Maximum protection" part is optional: most people don't need it, but on your own Mac you can turn those protections on yourself after reading the downsides.

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

**Maximum protection (ask IT first on work devices)**
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

**How to check it worked:** **Software Update** says your Mac is up to date. On Tahoe or Sequoia: if the only thing left is an offer to upgrade to a newer macOS, such as macOS Golden Gate (usually shown as **Upgrade Now**), you're done with this step.

**If you don't see this:** If it offers an upgrade to a whole new macOS (for example, from Tahoe to Golden Gate), check with IT before installing it. Macs with an Intel chip can't run macOS 27. That's OK for now. Install the latest updates for the version you have, and tell IT your Mac model.

**Going further:**
- **Only update from Apple's own screens.** Real macOS updates come from **System Settings > General > Software Update** or the **App Store**. A website pop-up saying your Mac "needs an update" or is "infected" is fake. Close the tab, and never download the "update" it offers.
- **Install urgent fixes the same day.** Apple lists its security fixes at **support.apple.com/100100**. When the notes for an update say Apple is aware the problem "may have been exploited", attackers are already using it. Install that update today instead of waiting for the weekend.
- **Know when your Mac stops getting fixes.** Apple gives the full set of security fixes only to the newest macOS. Older versions get some fixes for a while, then none. If your Mac can't move to macOS 27 (every Mac with an Intel chip), ask IT when it should be replaced, so you're not left on a Mac that no longer gets fixes. Apple is still sending security fixes for Tahoe for now, but hasn't given an exact end date.

**Going even further:** For people who can't afford to be even one fix behind.

- **Hear about fixes the day they ship.** Apple emails every security release on its free **security-announce** list (sign up at **lists.apple.com**). If you'd rather not subscribe, check **support.apple.com/100100** once a week. The cost is a few emails a month.
- **Treat "may have been exploited" as an emergency.** Install that update within hours, not days. Until it's installed, don't open links or attachments from messages on this Mac. You'll have to stop work for a restart.
- **Stay on the newest macOS, not just a patched older one.** Set yourself a rule: move to each new major version within about a month, once your key apps say they support it. Menus move and very old apps can stop working. On a work device, ask IT first.
- **Plan your move off Intel Macs.** macOS 26 Tahoe is the last version for Macs with Intel chips; macOS 27 runs only on Macs with an Apple chip. Apple still sends Tahoe security fixes but hasn't given an exact end date. If you rely on an old app made only for Intel Macs, plan to replace it: macOS 27 is the last version where Rosetta (which runs those apps) fully works. Do your most sensitive work on a Mac with an Apple chip (M1 or later, or the MacBook Neo). This costs money, so plan it rather than waiting for the fixes to stop.
- **Confirm the fix really landed.** Click the **Apple menu > About This Mac** and compare the version number with the newest one listed at **support.apple.com/100100**. Automatic installs sometimes fail quietly.
- **Keep test versions off this Mac.** In **System Settings > General > Software Update**, if you see **Beta Updates**, make sure it says **Off**. Test versions can have holes that aren't fixed yet.

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
   - **Install Security Responses and system files** (on macOS 26 and later it may instead be called **Install system data files and security updates**; small, urgent security fixes that install quickly, often without a restart)
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

**Going even further:** Close the gaps automatic updates leave behind.

- **Prefer the App Store version of an app.** App Store apps are fenced off from the rest of your Mac (this is called sandboxing) and all update through one switch. A few App Store versions have fewer features than the version from the maker's website.
- **Keep an app inventory.** Write a short list of every app that didn't come from the App Store: where you got it and how it updates. Turn on each one's own automatic-update setting. Replace any app whose maker has stopped updating it. Allow about 20 minutes to make the list and 5 minutes a month to keep it.
- **Restart on a schedule.** Quit and reopen your browsers every day or two, and restart the Mac once a week. Many updates only take effect after a restart, and a restart also clears some malware that lives only in memory. You'll reopen your windows afterwards.
- **Check Apple's silent protections are current.** macOS quietly updates its built-in malware lists. **SilentKnight**, a free tool from **eclecticlight.co**, shows in one window whether those lists, your firmware and your main security settings are up to date. Check its page says it supports your macOS version. On macOS 27 Golden Gate, use SilentKnight version 3 or later. On a work device, ask IT first.
- **Update the things that aren't apps.** Docks, monitors, keyboards, printers and your Wi-Fi router have their own updates, usually through the maker's app or website. Type the maker's address yourself. A failed firmware update can break an accessory, so don't unplug it halfway.

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
- **On macOS 27 Golden Gate or macOS 26 Tahoe:** your Mac may create a recovery key and save it in the **Passwords** app through iCloud Keychain (Apple's way of syncing your passwords between your Apple devices). It may also show you the key in a window called **Write Down Your Recovery Key**. Write it down or save it somewhere else as well (see below), then click **Done**. If you see a list of choices instead, follow the next bullet.
   - **On macOS 15 Sequoia, or if you see a list of choices:** you'll see choices like these:
     - **Allow my iCloud account to unlock my disk**: easiest. Your Apple Account can unlock your Mac if you forget your password. If you don't use iCloud yet, this may say **Set up my iCloud account to reset my password** instead.     - **Create a recovery key and do not use my iCloud account**: your Mac shows you a code. You are fully responsible for keeping it safe.
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
- **Important:** make sure you can see your recovery key from somewhere *other than this Mac*. For example: the **Passwords** app on your iPhone (open **All** and look for your Mac's name), your password manager, or your paper copy. If the only copy is on this Mac, write it down now.

**Heads-up:** Your Mac will no longer log you in automatically. You'll always need your password at startup. That's a good thing.

**Going further:**
- **Check that your recovery key really works.** This only applies if your Mac gave you a recovery key. If you chose the iCloud option and never saw a key, skip this. Open **Terminal** (in **Applications > Utilities**), type `sudo fdesetup validaterecovery` yourself, exactly as shown here, and press Return. Type your Mac password (nothing shows as you type), then your recovery key with its dashes. **true** means the key is correct. If it says **false**, don't turn FileVault off: contact IT. Check again if your Mac ever gives you a new key. When you're done, close Terminal. Don't type anything else there.
- **Shut down, don't just close the lid, when the Mac is at risk.** While your Mac is asleep, the disk is still unlocked inside it. When it's fully shut down, FileVault locks everything until someone types the password. Shut down before you leave it in a car or hotel room, or carry it through airport checks. The trade-off: it takes a little longer to start.
- **Don't look for a firmware password on newer Macs.** Macs with Apple chips (M1 and later) don't have one. The closest thing, **Recovery Lock**, can only be set by IT's device management. For you, FileVault plus Find My Mac (step 14) is the protection. Older Intel Macs do have a firmware password, but forgetting it can mean a trip to Apple with proof of purchase, so ask IT before setting one.

**Going even further:** FileVault is only as strong as the password, the recovery key and the drives around it.

- **Make the password match the lock.** Your login password is what unlocks the disk. Use six random words chosen with dice (**Online guide, step 9**, Going further). **Forget it and lose the recovery key, and your files are gone for good.** Keep the recovery key on paper before you change anything.
- **Replace a recovery key that may have been seen.** If the key ever sat in a photo, an email or a notes app, open **Terminal**, type `sudo fdesetup changerecovery -personal` and press Return. Type your Mac password, and your account name and password if it asks. The old key stops working and a new one appears. **Write the new key down before you close the window**, then test it with the check in Going further. Afterwards, open the **Passwords** app and check that any FileVault key saved there matches the new one. If it doesn't, rely on your paper copy. Close Terminal afterwards.
- **Know where copies of the key live.** On macOS 26 Tahoe and later, a copy is usually saved in the **Passwords** app (when iCloud Keychain is on) and syncs to your other Apple devices. Anyone who knows your Mac password or iPhone passcode can read it there, so those two codes guard your disk too. The strongest setup is paper in two locked places, one of them away from home.
- **Check who else can unlock the disk.** In Terminal, type `sudo fdesetup list` and press Return. Every name listed is another password that opens the disk at startup. If one shouldn't be there, deal with that account through step 6. Don't delete it from Terminal.
- **Encrypt every external drive and USB stick.** Control-click the drive in Finder and choose **Encrypt**. If that isn't offered, erase it in **Disk Utility** with the format **APFS (Encrypted)**, which deletes everything on it. Windows PCs can't read these drives, and a forgotten drive password means the contents are lost.
- **Add a second lock for your most sensitive files.** In **Disk Utility**, choose **File > New Image > Blank Image**, pick **256-bit AES** encryption and the **sparse bundle** format, and don't let it save the password in your keychain. The files stay locked even while your Mac is unlocked, until you open the image. Eject it when you're done. **If you forget that password, nobody can recover it**, so store it in your password manager and on paper.

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

**Going even further:** Control what leaves your Mac, and which networks it ever touches.

- **Run an outbound firewall in strict mode.** If you install **LuLu** or **Little Snitch** (Going further), don't let setup pre-approve the apps already on your Mac. Make each one ask once. Little Snitch can also keep stricter rules for public Wi-Fi than for home. Expect a week of questions, and note that blocking Apple's own services can break updates and iCloud. If you're unsure about an Apple item, allow it. On a work device, ask IT first.
- **Make every downloaded app ask before it accepts connections.** In **System Settings > Network > Firewall > Options**, turn off **Automatically allow downloaded signed software to receive incoming connections**. Leave the built-in software switch on. You'll see more pop-ups after installing apps.
- **Make your Mac harder to track on public networks.** In **System Settings > Wi-Fi**, click **Details** next to a public network. Set **Private Wi-Fi address** to **Rotating** and turn off automatic joining. Remove old hotel and café networks from the known-networks list (look under **Advanced**). You'll need the password to rejoin, and some networks that recognise your device need **Fixed** instead.
- **Skip unknown Wi-Fi altogether.** Use your iPhone's **Personal Hotspot**. If you must use a network you don't trust, a reputable VPN such as **Mullvad** or **Proton VPN** hides your traffic from that network. The VPN company can then see where you connect instead, and a VPN can clash with IT's web filter (step 20).
- **Harden your home router.** In the router's settings, turn off **UPnP** (which lets devices open doors in the router by themselves), **WPS** and remote administration. Put this Mac on a different network from smart gadgets (**Online guide, step 22**, Going further). Some game consoles and printers may need settings changed back.

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
- **On macOS 26 Tahoe or macOS 27 Golden Gate:** open **System Settings > Wallpaper**, then click **Screen Saver** (you may need to scroll down). Choose a screen saver, and set **Start Screen Saver** to 10 minutes or less.
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

**Going even further:** Make the locked screen reveal nothing and open only for your password.

- **Turn off fingerprint unlock when someone could force your finger.** In **System Settings > Touch ID & Password**, turn off the option to use Touch ID to unlock your Mac. If you have no time, shut the Mac down: it then needs the password. You'll type your password at every unlock.
- **Turn off Apple Watch unlock.** In the same place, turn off the **Apple Watch** option. Otherwise an unlocked watch near the Mac can open it. You lose a little convenience.
- **Hide notifications on the locked screen.** In **System Settings > Notifications**, set **Show previews** to **When Unlocked** or **Never**. Turn off **Allow notifications when the screen is locked** and **Allow notifications when mirroring or sharing the display**. Sign-in codes and private messages then can't be read over your shoulder or on a projector. You'll miss alerts until you unlock.
- **Silence Siri on the locked screen.** In System Settings, open the Siri settings and turn off **Allow Siri when locked**. Nobody can then ask your locked Mac to do things. You'll have to unlock before you use Siri.
- **Limit iPhone Mirroring.** This feature lets your Mac control your iPhone. If you use it, open the **iPhone Mirroring** app's settings and choose **Ask Every Time**. If you don't use it, remove this Mac on your iPhone in **Settings > General > AirPlay & Continuity > iPhone Mirroring**. You can set it up again later.
- **Guard the password itself.** Type it only when nobody and no camera can see your hands. A stick-on privacy filter stops people beside you reading the screen. The screen looks a little dimmer.

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

**Going even further:** Make this a one-person Mac, and know what separate accounts can't do.

- **Close the guest door to shared folders too.** In **System Settings > Users & Groups**, click the **i** next to **Guest User** and turn off **Allow guest users to connect to shared folders**. This only matters if File Sharing is ever switched on, and it costs you nothing.
- **Remove accounts nobody needs.** Each extra account is another password that can unlock the Mac at startup. Copy any files worth keeping, then delete accounts that are truly finished with. If you delete the home folder, its files are gone for good. On a work device, ask IT first. For accounts you don't recognise, follow step 6 and don't delete them yourself.
- **Know the limit of separate accounts.** Accounts keep honest people apart, but an administrator, or malware with admin rights, can read every account's files. For real separation, use a separate device.
- **Give visitors their own device and network.** Give them an old iPad on your router's **Guest** Wi-Fi rather than an account on your Mac. That's one more device to keep updated.
- **Travel light.** For a border crossing or a risky trip, take a Mac that holds only what the trip needs: a spare Mac, or yours freshly erased and signed in to as little as possible. Setting it up and restoring it afterwards takes hours, and you need a tested backup (step 19) first.

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

**Going even further:** Look for ways in that survive a password change.

- **Check for a stored remote key.** In Finder, choose **Go > Go to Folder** and type **~/.ssh**. If the folder doesn't exist, that's the normal answer. If it holds a file called **authorized_keys** that you didn't create, another computer may be able to log in without a password. Take a screenshot and ask IT. Don't delete it yourself.
- **Read the login history.** Open **Terminal**, type `last` and press Return. Each line is a login. A short list, or lines that only say **console**, **ttys**, **reboot** or **shutdown**, is normal. A line showing an internet address (numbers such as 203.0.113.5) means someone logged in from another computer. If you never set that up, tell IT. Close Terminal afterwards.
- **Audit your Apple Account from the web.** Type **account.apple.com** yourself and sign in. Check the devices, phone numbers and email addresses listed. Under **App-Specific Passwords**, revoke any you don't use. These are passwords for apps that can't do two-factor, such as some older mail and calendar apps. An old mail app using one will stop working until you make a new one.
- **Check who you share with.** Open **System Settings > Family**, and the shared groups in the **Passwords** app. People listed there may see your location, purchases or shared passwords. Removing someone can be noticed, so if you feel unsafe, read Apple's **Personal Safety User Guide** first.
- **Clean up from a clean device.** If you find anything wrong, change your Apple Account and email passwords from a different device you trust, not this Mac, because it may be the thing that's compromised. On a work device, ask IT first.

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

**Going even further:** Check the doors themselves, not just the switches.

- **See every door that's open.** Open **Terminal**, type `sudo lsof -iTCP -sTCP:LISTEN -n -P` and press Return, then enter your Mac password. (If you've switched to a standard account (step 21), log in to the admin account first, because a standard account can't use sudo.) Each line is a program waiting for connections. A few Apple names (such as **rapportd**) are normal. If a name is unfamiliar, take a screenshot and ask IT. Close Terminal afterwards. The list looks technical: you're only looking for names you don't know.
- **Never open doors in your router for this Mac.** Don't set up port forwarding (a router rule that lets the internet reach a device at home). If you must reach your Mac from elsewhere, use a private-network tool such as **Tailscale**, set up carefully. It's one more account to protect with a passkey or security key. On a work device, ask IT first.
- **Audit paired Bluetooth devices.** In **System Settings > Bluetooth**, remove any keyboard, headset or gadget you don't own or no longer use. You'd have to pair a removed device again.
- **Tighten any service you must keep.** For **File Sharing**, share one folder only and set **Everyone** to **No Access**. For **Remote Login**, turn off full disk access for remote users. Other people may need you to add them by name.
- **Re-check after every big macOS upgrade.** Upgrades and new apps can switch services on. Reopen **General > Sharing** after each one. It takes two minutes.

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

**Going even further:** Cut the wireless links between your devices that you don't truly need.

- **Turn off Handoff.** In **System Settings > General > AirDrop & Continuity**, turn off **Allow Handoff between this Mac and your iCloud devices**. A password you copy on one device then no longer appears on your others. You lose copy-and-paste between devices and picking up tasks from your iPhone.
- **Turn off Universal Control.** In **System Settings > Displays > Advanced**, turn off the option that lets your pointer and keyboard move between nearby Macs and iPads. Then no other device can steer this one. You lose shared keyboard and mouse.
- **Go radio-silent in hostile places.** At a protest, a border or a crowded conference, turn off both Wi-Fi and Bluetooth in **Control Center**. AirDrop needs both, and AirPlay needs Wi-Fi, so neither can reach you. Wireless keyboards, mice and headphones stop too, so use a cable.
- **Treat anything AirDropped as a download.** A contact's account can be hacked. Preview the file first and check what it really is (steps 15 and 17). This adds a few seconds.
- **Be careful where you send your screen.** Showing your screen on a hotel or meeting-room TV can also show your notifications there. Use a cable where you can, and check that notifications stay off while mirroring (step 4, Going even further).

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

**Going even further:** Verify software before it runs, and run doubtful software somewhere that doesn't matter.

- **Check the download's fingerprint.** Some makers publish a "SHA-256 checksum" (a fingerprint of the genuine file). In **Terminal**, type `shasum -a 256 ` (with a space at the end), drag the downloaded file in, and press Return. The result must match the maker's value exactly. You can also paste the result into the search box at **virustotal.com**, which checks it against many security companies without uploading your file. Only some makers publish a checksum.
- **Look inside installers before running them.** **Suspicious Package** (free, from mothersruin.com) opens a **.pkg** installer and shows who signed it, what it will install and what scripts it runs. The details are technical. If the signer isn't the company you expected, stop.
- **Make "Open Anyway" a hard no.** When macOS blocks an app, **Privacy & Security** offers an **Open Anyway** button. Make it a rule that an app needing that button doesn't get installed. You'll go without a few small tools.
- **Try unknown software inside a throwaway Mac.** **UTM** (free from its own website, getutm.app; the App Store copy is paid) runs a second, separate copy of macOS in a window, called a virtual machine. Running macOS inside it needs a Mac with an Apple chip. Test doubtful apps there and delete the copy afterwards. It needs tens of gigabytes of space and some patience, and it isn't a perfect wall. On a work device, ask IT first.

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

**Going even further:** Stop settings drifting, and enforce them properly if you run the office.

- **Re-audit after every major macOS upgrade.** Big upgrades add features that are switched on by default, and sometimes change settings. After each one, re-walk steps 3, 7, 8, 11 and 12. Allow about 15 minutes.
- **Use the professional checklist.** The Center for Internet Security publishes a free **CIS Benchmark for macOS** at **cisecurity.org** (it asks you to sign up). It lists more than a hundred settings in two levels of strictness. Check it covers your version: as of November 2026 the newest one is for macOS 26 Tahoe, and there isn't one for macOS 27 Golden Gate yet. It's long and technical. Change one thing at a time, and write down what you changed so you can undo it.
- **Lock settings with a profile you write yourself.** **iMazing Profile Editor** (free) builds a settings file that can hold some options in place, such as screen-lock rules. Install it as in step 20. On a Mac that isn't company-managed, many restrictions are ignored, and anyone with the admin password can remove the profile. A mistake can be undone by removing the profile in **Device Management**.
- **If you run the office, get real management.** With **Apple Business** (Apple's free service that replaced Apple Business Manager in 2026, with basic device management built in), or a management service such as **Jamf Now** or **Mosyle** connected to it, settings are enforced, a lost Mac can be locked, and **Recovery Lock** becomes available. The management account then controls every Mac, so protect it with security keys (step 25). On a work device this is IT's decision, so ask IT first.

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
- **Check the quieter lists too.** In **Privacy & Security**, also look at **Files & Folders**, **App Management** (apps that can update or delete other apps), **Local Network**, **Bluetooth** and **Location Services**. Use the same rule: keep what you know and use, and ask IT about names you don't recognise. On macOS 27, an app that wants to read another company's app data no longer asks: it's blocked unless you allow it in **Privacy & Security**. Only allow it if you know why the app needs it.
- **Share less with Apple and Siri.** In **Privacy & Security > Analytics & Improvements**, you can turn off **Share Mac Analytics** and the switch for improving Siri (called **Improve Siri & Dictation** on macOS 26; the name may differ slightly on macOS 27). On macOS 27.2 and later, you can also choose which apps Siri, Search and suggestions can look into: search System Settings for **Excluded Apps**. Your Mac and Siri keep working the same. It just sends less about how you use them.
- **Make it a habit.** Repeat this check a few times a year, and right after installing new software. Most apps ask for one of these permissions on first use, and it's easy to click **Allow** without thinking.

**Going even further:** Shrink these lists to almost nothing, and get told when the camera or microphone wakes up.

- **Get an alert every time the camera or microphone turns on.** **OverSight**, free from **objective-see.org**, pops up and names the app each time. Video calls will also trigger it, so you need to read the alerts. Check it supports your macOS version. On a work device, ask IT first.
- **Start from zero.** In **Terminal**, `tccutil reset Camera` and `tccutil reset Microphone` clear those lists. `tccutil reset All` clears every list in this step. Each app must then ask again, and you approve only what you use. Security, backup and remote-support tools stop working until you approve them again. Close Terminal afterwards.
- **Empty the Developer Tools list.** In **System Settings > Privacy & Security**, open **Developer Tools**. Apps listed there may run software that skips some of the Mac's safety checks. Unless you write software, nothing should be switched on.
- **Keep Full Disk Access tiny.** **Terminal** and web browsers shouldn't have **Full Disk Access** on a normal person's Mac. Switch them off there. Ask IT about backup and security tools before touching those.
- **For sensitive conversations, trust hardware.** On Mac laptops with Apple chips, closing the lid physically disconnects the built-in microphone. External microphones, webcams and monitors with cameras aren't covered, so unplug them. Apple warns that a thick camera cover can crack the display when the lid closes. For the most private talks, leave the Mac and phone in another room.

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
- **Watch for gray dots in the Dock (macOS 27).** When you quit an app that keeps running in the background, its Dock dot turns light gray. If you don't need it running, Control-click its Dock icon and choose the option to stop it running in the background. The app may then stop syncing or updating until you open it again.
- **Peek in the folders where start-up files live.** In Finder, choose **Go > Go to Folder** and type **/Library/LaunchAgents**, then **/Library/LaunchDaemons**, then **~/Library/LaunchAgents**. Names like **com.google...** or **com.microsoft...**, from companies whose apps you use, are normal. Don't move or delete anything here yourself: ask IT about names you don't recognise.

**Going even further:** Keep a record of what's normal, and know when to stop cleaning and start again.

- **Save a dated baseline.** When your Mac is in a known-good state, run **KnockKnock** (Going further) and save the scan with the date. Later, its compare button shows what has changed since that scan. For a built-in record, type `sudo sfltool dumpbtm > ~/Desktop/startup-list.txt` in **Terminal**. After a scare, run it again and look for new names. The lists are long. You're only comparing them, not deleting anything.
- **Check the most powerful add-ons.** In **System Settings > General > Login Items & Extensions**, look in **Extensions** for the groups about **Endpoint Security**, **Network** and **Driver** extensions. These can see or filter everything on the Mac. Only tools you chose (a firewall, a VPN, security software) belong there. In Terminal, `systemextensionsctl list` shows the same items. On a work device, ask IT first.
- **Check for timed jobs.** In Terminal, type `crontab -l` and press Return. On most people's Macs it says there is **no crontab**. If it lists anything you didn't set up, take a screenshot and ask IT. Close Terminal afterwards.
- **If something keeps coming back, start fresh.** First change your key passwords from a different device. Then use **System Settings > General > Transfer or Reset > Erase All Content and Settings**, set the Mac up as new, reinstall apps from their makers, and copy back documents only. Don't restore apps or settings from a backup. **This erases everything**, so confirm your backup works first (step 19). It takes most of a day.
- **If you think you're being targeted on purpose, don't erase yet.** Erasing destroys the evidence experts need. Stop using the Mac for anything sensitive and get expert help first (step 23 says who).

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
- **Fewer is safer.** Extensions are sometimes sold to new owners who quietly add tracking or worse. If an extension suddenly asks for new permissions after an update, or you can't remember why you have it, remove it. Most people only need their password manager. Safari 27 can also build an extension from a description you type (Apple calls this **Describe an Extension**). Treat one like any other extension: keep it only if you really use it.
- **On a work Mac, ask IT before adding any new extension.** Some companies only allow approved ones.

**Going even further:** Make the browser you bank in as plain as possible.

- **Aim for zero extensions where money is involved.** Safari fills in passwords from the **Passwords** app without any extension. Use an extension-free Safari profile, or a separate browser, only for banking. The strongest version is a separate device used for nothing else (**Online guide, step 18**, Going further). You'll switch windows or devices more often.
- **Check nobody "manages" your browser.** In Chrome, type **chrome://management** in the address bar. In Edge, type **edge://management**. In Firefox, type **about:policies**. On a personal Mac these should say the browser isn't managed and has no policies. Malware sometimes sets policies that force an extension to stay installed. On a work device, policies from IT are normal.
- **Protect the account that syncs your browser.** Chrome, Edge and Firefox copy extensions and settings through your Google, Microsoft or Firefox account. Someone who gets into that account can add an extension to your browser. Give it a passkey or security key (**Online guide, step 16**). If you turn off extension syncing instead, you set up each computer by hand.
- **Harden Safari itself.** In **Safari > Settings > Advanced**, set **Use advanced tracking and fingerprinting protection** to **in all browsing**, and leave **Show features for web developers** unticked. A few sites may load oddly. You can reload a single page with less protection.
- **Choose reviewed extensions only.** In Firefox's add-on store, a **Recommended** badge means Mozilla's staff reviewed it. In any browser, be wary of extensions that can "read and change all your data on all websites". You'll have fewer extensions to choose from.

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

**Going even further:** Protect the account behind Find My, and rehearse the bad day.

- **Lock down the account that controls it.** Anyone who gets into your Apple Account can see where this Mac is and erase it remotely. Add security keys (step 25) and check who shares your location in the **Find My** app under **People**. If someone may be tracking you, read Apple's **Personal Safety User Guide** before changing anything, because changes can be noticed.
- **Make sure it can be found offline.** In the same **Find My Mac** settings you opened in this step (under **See All**), check **Find My network** is on as well. Other people's Apple devices can then report your Mac's location privately, even without Wi-Fi. It costs you nothing.
- **Put a tracker in the bag.** An **AirTag** in the laptop sleeve gives a second way to find it. It costs the price of an AirTag. A thief's iPhone or Android phone will eventually warn them a tracker is travelling with them, so it buys you time, not a guarantee. Only you see where it is, unless you share it with people you trust in the **Find My** app (**Items**).
- **Decide your erase rule now.** If the Mac is taken while awake or unlocked, or the thief may know your password, choose **Erase This Device** straight away and change your passwords from another device. If it was shut down with FileVault and a strong password, use **Mark As Lost** first. Either way, keep it on your account. After erasing, you usually can't see where it is any more.
- **Do a no-devices drill.** On someone else's device, in a private window, go to **icloud.com/find** and check you can sign in without your Mac or phone. If your account uses security keys, take one with you. When you mark an older Intel Mac as lost, you create a number code: write it down, because you'll need it if the Mac comes back. A Mac with Apple silicon unlocks with your Apple Account password instead. Sign out afterwards.

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

**Going even further:** Assume a file from a stranger is hostile until proven otherwise.

- **Turn risky documents into safe copies.** **Dangerzone**, free from the Freedom of the Press Foundation (dangerzone.rocks), rebuilds a PDF, Office file or image inside a sealed box and hands back a clean PDF. It's slow, needs extra software installed (its site says what), and the result is less editable. On a work device, ask IT first.
- **Open unknown files somewhere that doesn't matter.** Use the virtual machine from step 9, or an iPhone or iPad, where apps are more tightly fenced. Even a Quick Look preview has to read the file. If you're being targeted and a file is truly unexpected, don't preview it. Phone the sender first.
- **Never remove a download's safety tag.** Downloads carry a hidden "quarantine" tag that triggers your Mac's checks. Any instruction to "fix a damaged app" with a Terminal command containing **xattr** or **spctl** is a trick to strip that tag. Close the page.
- **Block macros in Office.** Macros are small programs inside documents. In Word or Excel, open the **Word** (or **Excel**) menu, then **Preferences** (called **Settings** in some versions), then **Security**, and choose **Disable all macros without notification**. Spreadsheets that rely on macros stop working until you change it back.
- **Stop Mail loading remote content.** In **Mail > Settings > Privacy**, untick **Protect Mail Activity**, then tick **Hide IP Address** and **Block All Remote Content**. Nothing in an email is then fetched until you click **Load Content**. The **iPhone guide, step 27** does the same on your iPhone. Emails look bare until you load them.

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

**Going even further:** Check the deeper places where someone can redirect or read your traffic.

- **Confirm the Mac isn't secretly managed.** In **Terminal**, type `profiles status -type enrollment` and press Return. On a personal Mac, both lines should say **No**. A **Yes** means an organisation can control it. On a work device that's normal. On a personal or second-hand Mac, stop and get help.
- **Check for extra trusted certificates.** A certificate you've been tricked into trusting can let someone read your encrypted web traffic. Search for **Keychain Access** with Spotlight, open it, click **login**, then the **Certificates** tab, then do the same for **System**. An item with a small blue **+** on its icon has been specially trusted. If neither you nor IT added it, take a screenshot and ask before deleting it. Deleting the wrong one can break work tools.
- **Check where web addresses get looked up.** In **System Settings > Network > Wi-Fi > Details > DNS**, you should see your router (often starting 192.168, 10 or 172), your internet provider's addresses (sometimes long ones with colons), or a service you chose. In Terminal, `cat /etc/hosts` should show only a few lines mentioning **localhost** and **broadcasthost**. Ask IT about anything else. Close Terminal afterwards.
- **Vet a second-hand Mac before you trust it.** Erase it yourself with **Erase All Content and Settings** before first use. If setup shows a **Remote Management** screen, a company still owns it, so return it. This takes an hour.
- **Treat an unknown profile as a symptom.** If one appeared after a scam call or a pop-up, removing it isn't the cure. Work through step 12's fresh-start advice. On a work device, ask IT first.

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

**Going even further:** Don't trust the name or the icon; ask the Mac what the file really is.

- **Ask the Mac directly.** In **Terminal**, type `file ` (with a space at the end), drag the file in, and press Return. A real PDF says **PDF document**. A reply mentioning **executable**, **script** or **directory** (apps are really folders) when you expected a document means don't open it. **Zip archive** is normal for a .zip and for some Word or Excel files; if unsure, also check the **Kind** column (Going further). Close Terminal afterwards. This adds a few seconds per file.
- **Know which endings are programs.** These can all run things or change settings: **.app**, **.pkg**, **.dmg**, **.command**, **.terminal**, **.scpt**, **.workflow**, **.jar**, **.mobileconfig**, **.inetloc**. Office files ending in **m** (such as **.docm** and **.xlsm**) contain macros. Don't open any of these from a message unless you asked for it.
- **Show hidden files in a download.** Inside a downloaded disk image or unzipped folder, press **Command + Shift + .** (full stop). Hidden items appear greyed out. An "invoice" that comes with hidden programs is a trap. Press the same keys again to hide them, or your own folders will look cluttered.
- **Distrust names that look right.** File names can use lookalike letters, long gaps or text that reads backwards to hide the true ending. The **Kind** column (Going further) and the `file` check above ignore those tricks, so rely on them rather than on the name.

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

**Going even further:** Verify the deepest protections, and know how to rebuild trust in a Mac that left your control.

- **Check everything in one window.** **SilentKnight** (free, from **eclecticlight.co**) reports System Integrity Protection, startup security, the system seal, firmware and Apple's malware lists together. It only reads settings unless you ask it to fetch updates. Pick the version its site lists for your Mac: version 3 is for Apple silicon, including macOS 27 Golden Gate, and the older 2.x line still covers Intel Macs, which stop at macOS 26. On a work device, ask IT first.
- **Check the system's seal.** macOS keeps its core files on a sealed, read-only volume. In **Terminal**, type `csrutil authenticated-root status` and press Return. It should say **enabled**. If it doesn't, tell IT and don't try to fix it. Close Terminal afterwards.
- **Treat a Mac that left your control as untrusted.** This applies if it was taken at a border, kept overnight by a repair shop you don't know, or left in a hotel room while you're being targeted. Shut it down before any such moment. Afterwards, repeat this step at least. Taking the Mac everywhere is a nuisance, but it's the price of this level of protection.
- **Do the deepest reset.** If this Mac has Apple silicon (or is an Intel Mac with the T2 chip), you can restore its firmware and system completely, using a second Mac running macOS 14 or later and a USB-C cable that carries both data and charging (not a Thunderbolt 3 cable). Apple's article "How to revive or restore Mac firmware" gives the exact steps, and an Apple Store can do it for you. **Restore erases everything**, so confirm your backup works (step 19) and that you know your Apple Account password first.
- **Buy from Apple or an authorised seller.** Decline any Mac that arrives "set up for you". Erase it and set it up yourself.

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
2. Control-click (or right-click) the backup drive in the Finder sidebar, then choose **Encrypt**. If there's no **Encrypt** option, set the drive up again as in the steps above. That erases it, so only do it if you don't need the old backups.
3. Type a password in **Encryption password** and **Verify password**, add a hint, and click **Encrypt Disk**.
4. Save the password in your password manager. Your existing backups are kept.

**How to check it worked:** **Time Machine** shows your drive with the date of the latest backup. Plug the drive in regularly (once a week is a good habit).

**Heads-up:** Encrypting an existing drive can take hours. Keep it plugged in. (This only applies to a drive plugged into your Mac. A network backup drive, such as a Time Capsule, does have to start over when you encrypt it.)

**Going further:**
- **Keep a second copy somewhere else.** A fire or burglary can take the Mac and the backup drive together. Time Machine can use two drives and takes turns between them: add the second one in **System Settings > General > Time Machine** with **Add Backup Disk**, turn on **Encrypt Backup** for it too, and keep it at another place (work or a relative's house). Swap them every few weeks. The trade-off: a second drive costs money and you have to remember to swap.
- **Test that you can get a file back.** Open a folder in Finder, then open the **Time Machine** app (in **Applications**). Go back in time, pick a file and click **Restore**. A backup you've never restored from is only a hope.
- **Unplug the drive after the backup finishes.** Harmful software that scrambles your files can also reach a drive that's always plugged in. Eject it in Finder, then unplug it. Plug it back in at least once a week, as in the main step.
- **iCloud Drive isn't a backup.** If you delete or damage a file, iCloud copies that change to all your devices. A paid online backup service is a good offsite copy, but on a work Mac ask IT first: company files may not be allowed there.

**Going even further:** Build backups that survive fire, theft, ransomware and your own mistakes at the same time.

- **Rotate three drives, and keep one cold.** One drive is at home in use. One is offsite. A third is updated every month or two and otherwise never plugged in. If harmful software damages files slowly and you notice late, the cold copy is older than the damage. Encrypt all three. This means three drives and a calendar reminder.
- **Add a second method.** Use a different tool for one copy, such as **Carbon Copy Cloner** (paid) or **SuperDuper** (free for basic copies, paid for scheduling), so a fault in one tool can't ruin every backup. For an offsite copy that updates itself, **Arq** (paid) encrypts your files with your own password before uploading. **Backblaze** (a paid subscription) can also use a private key you set. **If you lose that password or key, the backup can't be opened by anyone.** On a work device, ask IT first.
- **Back up what lives only in the cloud.** Time Machine copies only files that are actually on your Mac. In **System Settings > [your name] > iCloud**, find **Optimize Mac Storage** (on recent versions it's inside **Drive** or **iCloud Drive**) and turn it off. In **Photos > Settings > iCloud**, choose **Download Originals to this Mac**. Also check **Options** in Time Machine settings: external drives are left out unless you remove them from the list. This uses much more disk space.
- **Write a recovery kit on paper.** List your Mac password, Apple Account password, backup drive passwords, password-manager master password, FileVault recovery key and where your security keys are. Seal it in a safe, with a second copy somewhere else you trust. **This paper opens everything, so guard it like cash.**
- **Do a full drill once a year.** Pretend the Mac and phone are both gone. Using only the kit and a backup drive, restore a whole folder onto another Mac or an empty drive. Allow an afternoon. It's the only real proof your backups work.

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

**Going even further:** If nobody filters for you, build your own filter and make it hard to bypass.

- **Install your own encrypted filter (only if IT hasn't sent one).** **NextDNS** makes a signed profile for you at **apple.nextdns.io**. **Quad9** also offers ready-made profiles on its own site. Type the addresses yourself and install the profile exactly as in this step. It blocks known scam sites on every network and hides your look-ups from the Wi-Fi owner. Hotel sign-in pages may not appear until you switch it off for a moment. Look for it in **System Settings > Network**, in the **VPN & Filters** section, and set it to disabled. (NextDNS's profile page also lets you list Wi-Fi networks where it switches itself off.) The filter company sees which site names you visit. Use only one such profile. Since macOS 26, some of these profiles have failed to install with a "VPN Service" error. If that happens, download a fresh copy from the company's site, or use the company's own Mac app instead. If a filter profile you already have works, don't remove it just to replace it, because the new one may not install. On a work device, ask IT first.
- **Turn on the stricter blocks.** In NextDNS's **Security** page, turn on **Threat Intelligence Feeds** and **Block Newly Registered Domains**, because many scam sites are only days or weeks old. Now and then a brand-new honest site is blocked, and you can allow it by hand. Set its logs to a short time, or off, if you don't want a record kept.
- **Stop browsers going around the filter.** Chrome and Firefox can do their own look-ups. In Chrome, go to **Settings > Privacy and security > Security > Use secure DNS**. In Firefox, go to **Settings > Privacy & Security > DNS over HTTPS**. Switch it off, or point it at the same service. You'll need to re-check after browser updates.
- **Write the profile yourself.** **iMazing Profile Editor** (free) has a **DNS Settings** section where you enter the service's "DNS over HTTPS" address. Your own profile shows as **Unsigned**. That's expected for a profile you made, and never acceptable from anyone else. A typing mistake can stop websites loading until you remove the profile in **Device Management**. If macOS refuses to install it with a "VPN Service" error (reported since macOS 26), one fix people report is to set the profile's scope to **System** before you save it.
- **Cover the whole house and test it.** Set the same service on your router (**Online guide, step 18**, Going further). Use the test page the service gives you to confirm it's working. A filter you've never tested may not be filtering at all.

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

**Going even further:** Keep the Admin account bare, and split your digital life into compartments.

- **Keep Admin bare.** Don't sign it in to an Apple Account, don't add a fingerprint, and don't set up email or a browser there. It should hold nothing and do nothing except approve changes. Keep its long password on paper with your recovery kit (step 19). With no fingerprint, admin approvals always need typing. **If you lose the only admin password, getting back in is difficult.**
- **Use the cancel-and-retrigger rule for password boxes.** Malware can show a fake password box (**Online guide, step 7**). If a box asks for the admin password and you didn't just start something that needs it, click **Cancel**. Then start the task yourself from System Settings or the installer. A real request will ask again. This adds a few seconds.
- **Give money its own compartment.** Create a third **Standard** account used only for banking and taxes, with no email and no extra apps. This keeps everyday downloads away from it. It's a fence, not a wall: malware with admin rights can cross it. A separate device is stronger (**Online guide, step 18**, Going even further). You'll log out and in to switch.
- **Run "sudo" commands from Admin only.** Commands in this guide that start with **sudo** won't work from a Standard account. Log in to Admin just for that, run the command, and log out again.
- **Check the admin list each quarter.** Repeat the admin-rights check in step 6's Going further. Only your Admin account, and **root**, should appear. On a work device, ask IT first.

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

**Going even further:** Help an honest finder without helping a dishonest one.

- **Use a contact detail that isn't really you.** Put a work number, a second phone number or an email alias in the message, not your main mobile number or main email. Then the message gives a thief nothing to use in a scam against you. You need to keep that number or alias working.
- **Expect fake "we found your Mac" messages.** Thieves sometimes write pretending to be Apple or a kind finder, with a link to sign in. They want your Apple Account password so they can unlock the Mac. Never give a password, a code or an unlock PIN, and never remove the Mac from your account (step 14). The **iPhone guide, step 17** describes the same trick.
- **Make the locked screen say nothing else.** Combine the message with hidden notification previews (step 4) and **Name and password** at the login window (Going further). Use a plain wallpaper and account picture. A locked Mac that shows no name, photo or messages tells a stranger nothing. It looks less personal.

---

## Maximum protection (ask IT first on work devices)

These are strong protections for people who are at higher risk, such as those who handle very sensitive information or may be targeted personally. They have real downsides. **On a work device, or any device you also use for work, only turn them on if IT asks you to.** On your own device, they're your choice. They're the top tier of the **Going even further** boxes elsewhere in this guide. Read each step's downsides, and set up its safeguards (such as a second security key or a recovery key stored offline) before you switch anything on. Most people don't need them, and that's fine.

### 23. Lockdown Mode

**What it is:** An extreme protection mode for people who might be targeted by sophisticated spyware. It switches off many features that attackers could use.

**Before you start:** If IT sent you a web filtering profile (step 20), install it **first**. You can't install profiles while Lockdown Mode is on. If you need one later, turn Lockdown Mode off, install it, then turn Lockdown Mode back on.

**Steps**
1. Open **System Settings > Privacy & Security**.
2. Scroll down to **Lockdown Mode** and click **Turn On**.
3. Click **Turn on Lockdown Mode**, enter your password if asked, then click **Turn On & Restart**.

**Downsides:** Some websites load slower or look broken. Most message attachments are blocked. FaceTime calls are blocked from people you haven't called in the past 30 days. Shared albums and some device connections stop working. You need to turn it on separately on each of your devices (Mac, iPhone, iPad). Phone calls, normal messages and emergency features keep working.

**How to check it worked:** **Privacy & Security** shows Lockdown Mode as on.

**Going even further:** Lockdown Mode works best as part of a routine, with expert help lined up.

- **Turn it on everywhere, with no exceptions.** Switch it on for your iPhone, iPad and every Mac. Don't add websites, apps or contacts to its exception lists. Since version 27 you can also exclude a contact (**Privacy & Security > Lockdown Mode > Customize Contacts**), which turns off message limits for that person, so leave that list empty too. An attacker only needs the one device, site or contact you left out. More things will look broken, and you'll have to live with that.
- **Browse with Safari while it's on.** Lockdown Mode's web protections apply to Safari. Chrome and Firefox on a Mac use their own engines and don't get them. Some sites will look plain or broken.
- **Shrink the ways messages can reach this Mac.** If you don't need them here, sign out in **Messages > Settings > iMessage** and in **FaceTime > Settings**. Use your phone for messages. Turn on **Contact Key Verification** (**iPhone guide, step 32**). You'll have no texts or calls on the Mac.
- **Know what a real Apple threat notification looks like.** Apple sends it as an alert on your iPhone and by email (from threat-notifications@email.apple.com), and shows it at the top of the page after you sign in at **account.apple.com** (type it yourself). It never asks you to click a link, install anything or give a password or code. If you get one, contact **Access Now's Digital Security Helpline** (accessnow.org/help), which Apple itself recommends. Journalists and activists can also contact **Amnesty International's Security Lab**. Don't erase the device first, because that destroys evidence.
- **Remember what it doesn't do.** It doesn't remove spyware that's already there. Keep updating the same day (step 0) and restart daily, which clears some memory-only spyware. If you suspect an infection, see step 18's deepest reset after you've had expert advice. On a work device, ask IT first.

### 24. Advanced Data Protection for iCloud

**What it is:** Normally, Apple can help you recover some iCloud data (like Photos and Notes) if you lose access. With Advanced Data Protection, almost all your iCloud data is locked so that only your devices can open it, not even Apple.

**Before you start:** Update **all** your Apple devices first. You must set up a **recovery contact** (a trusted person) or a **recovery key**, or both.

**Steps**
1. Open **System Settings**, click **your name**, then **iCloud**.
2. Click **Advanced Data Protection**, then **Turn On**.
3. Follow the steps on screen to set up your recovery method.

**Downsides:** **If you lose access to your devices and your recovery method, Apple cannot get your data back.** Viewing iCloud data on the iCloud.com website needs extra steps. In the UK, Apple no longer lets new users turn it on, so you may not see the option there.

**How to check it worked:** **iCloud > Advanced Data Protection** shows it as on.

**Going even further:** Close the remaining gaps around Advanced Data Protection without locking yourself out.

- **Pair it with security keys.** With step 25 done, nobody can add a new device to your account, and so receive your encryption keys, by phishing a code. Read the lockout warnings in step 25 first.
- **Build two ways back in.** Set a **recovery contact** and a **recovery key** (in **System Settings > [your name] > Sign-In & Security**). Keep the key on paper in two places, one away from home. **Once a recovery key is set, Apple's own account recovery can't help you. If you lose your devices, the key and your contact, your data is gone for good.** Check each year that your contact still has an Apple device and that you can find the paper.
- **Keep web access switched off.** In **System Settings > [your name] > iCloud**, leave **Access iCloud Data on the Web** off. Then a stolen password can't be used to browse your files in a web browser. If you ever turn it on, turn it off again afterwards.
- **Know what still isn't covered.** **iCloud Mail, Contacts and Calendars** aren't end-to-end encrypted even with this on. Neither is anything you share by public link, nor your messages sitting in the backup of a friend who doesn't use it. Keep truly sensitive talk out of email. For chats, an app such as **Signal** with disappearing messages helps, though it's one more app for you and your contacts.
- **Encrypt before you upload elsewhere.** Dropbox, Google Drive and similar services can read your files. **Cryptomator** (open source) locks a folder with your own password before it syncs. **If you forget that password, the files can't be recovered**, so store it in your password manager and recovery kit (step 19). On a work device, ask IT first.

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

**Going even further:** Run your keys like a system, so losing one is a nuisance and not a disaster.

- **Own three keys, in three places.** Keep one with you, one locked at home and one somewhere else you trust. Buy them directly from the maker (for example Yubico), not from a marketplace seller. Carry your key separately from the Mac, not in the laptop bag. A third key costs more.
- **Put a PIN on each key.** The free **Yubico Authenticator** app can set a PIN on a YubiKey, so a thief who has the key also needs the PIN wherever the key asks for it. **Several wrong PIN tries in a row block the key, and resetting it wipes every account from it.** That's why you keep spares, and why the PIN belongs in your password manager.
- **Keep a key ledger and test each key.** Write down which keys are registered with which accounts. Every few months, sign in at **account.apple.com** in a private window using each spare. A key that sits in a drawer for years can fail without you noticing. Allow ten minutes a quarter.
- **Rehearse losing one.** The day a key goes missing, remove it in **Sign-In & Security > Two-Factor Authentication > Security Keys** and add a replacement, so you never drop below two. Then use your ledger to do the same for other accounts. You'll need a spare key, or one of your signed-in Apple devices, to do this.
- **Protect what sits beside the keys.** Your Apple Account still lists a phone number, so keep the carrier lock on (**iPhone guide, step 11**). Use the same keys for your email and password manager (**Online guide, step 16**). A key also can't protect a Mac that's already infected, because malware can ride along once you're signed in. Keep the earlier steps in place. On a work device, ask IT first.

---

## You're done

Thanks for taking the time. Your Mac is now much harder to break into and much easier to recover if something goes wrong.

**Keep these habits:**
- Install updates when your Mac asks.
- Lock your screen when you walk away (Control + Command + Q).
- Never install anything a pop-up or unexpected email tells you to.
- If something looks wrong, ask IT (see "How to reach IT" at the top). There are no silly questions.
