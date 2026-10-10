# NU Student Support Centre: GitHub Pages এ চালু করার নিয়ম

1. github.com এ নতুন Repository খুলুন (যেমন `nu-support`), Public রাখুন।
2. এই ফোল্ডারের সব ফাইল (`index.html`, `admin.html`, `data.json`, `.nojekyll`, `uploads/`) Repository তে আপলোড করুন।
3. Settings → Pages → Branch: `main`, Folder: `/ (root)` → Save। ১-২ মিনিটে সাইট চালু হবে: `https://yourname.github.io/nu-support/`
4. অ্যাডমিন: `.../admin.html` খুলুন। এডিট করতে GitHub Token লাগবে:
   - GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate
   - Repository access: শুধু এই repo; Permissions: Contents → Read and write
   - অ্যাডমিন পেজে repo (`yourname/nu-support`), branch (`main`) ও token বসিয়ে "সংযোগ সেভ করুন"
5. তথ্য বদলে "GitHub এ সেভ করুন" চাপুন। ১-২ মিনিটে সাইটে আসবে।

## সাবধানতা
- Token কাউকে দেবেন না। শুধু নিজের বিশ্বস্ত ডিভাইসে ব্যবহার করুন। টোকেন ছাড়া কেউ admin.html খুললেও সেভ করতে পারবে না।
- নমুনা সনদের ছবি নিজের তোলা বা নিজের বানানো দিন। অন্য সাইটের ছবি কপি করবেন না। ব্যক্তিগত তথ্য ঢেকে দিন এবং ছবিতে "SAMPLE" লিখে নিন।
- ফি ও নিয়ম nu.ac.bd থেকে মিলিয়ে নিন।
- নিজের domain দিতে চাইলে Pages Settings এ Custom domain বসান।

## অ্যাডমিন লগইন ও স্টুডেন্ট ফর্ম
- admin.html এ ঢুকতে ইউজারনেম ও পাসওয়ার্ড লাগে। প্রথম লগইনের পর অ্যাডমিন প্যানেলের "লগইন তথ্য বদলান" অংশ থেকে নিজের ইউজারনেম ও পাসওয়ার্ড দিন, তারপর "GitHub এ সেভ করুন" চাপুন।
- এই লগইন একটি স্ট্যাটিক সাইটের সুবিধার জন্য। আসল নিরাপত্তা GitHub Token, তাই Token গোপন রাখুন এবং পাসওয়ার্ড লম্বা ও কঠিন দিন।
- স্টুডেন্ট রেজিস্ট্রেশন: Google Forms এ ফর্ম বানান → Send → লিংক কপি করে অ্যাডমিনে "Google Form লিংক" ঘরে বসান। ফর্মের উত্তর আপনার Google অ্যাকাউন্টে জমা হবে।

## আগে কম্পিউটারে কাজ করে পরে প্রকাশ
1. ফোল্ডারের `admin.html` ডাবল-ক্লিক করে খুলুন (ফন্টের জন্য ইন্টারনেট লাগবে), লগইন করে সব তথ্য, রং, পেজ ও ছবি দিন। ছবি সরাসরি বসে, PDF এর জন্য GitHub সংযোগ লাগে।
2. নিচের "কম্পিউটারে সেভ (data.json + data.js)" চাপুন। দুটি ফাইল নামবে, ফোল্ডারে আগের ফাইলের জায়গায় বসান।
3. `index.html` ডাবল-ক্লিক করে সাইট দেখুন।
4. পছন্দ হলে ফোল্ডারের সব ফাইল GitHub এ আপলোড করুন।

## নিজের স্টুডেন্ট রেজিস্ট্রেশন ফর্ম
- কিছু না করলেও `#register` পেজে ফর্ম দেখাবে এবং "WhatsApp এ পাঠান" বাটনে তথ্য আপনার WhatsApp এ চলে যাবে।
- তথ্য Google Sheet এ জমা করতে: Google Sheets এ নতুন শিট খুলুন → Extensions → Apps Script → `google-apps-script.gs` এর কোড পেস্ট করুন → Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone) → Deploy → Web app URL কপি করে অ্যাডমিনের "নিজের ফর্মের Google Sheet লিংক" ঘরে বসিয়ে সেভ করুন।
- Google Form ব্যবহার করতে চাইলে Sheet লিংক ঘর ফাঁকা রেখে "Google Form লিংক" ঘরে লিংক দিন।

## English ভাষা ও সেবার ভিডিও
- অ্যাডমিনে "English Edit" চেপে ইংরেজি লেখা এডিট করুন। সাইটে English / বাংলা বাটন আসবে।
- প্রতিটি সেবার "ভিডিওর লিংক" ঘরে YouTube (Unlisted), Facebook, Google Drive বা MP4 লিংক দিলে সেবার পেজে ভিডিও স্ক্রিন দেখাবে।

## হোস্টিং ভার্সন
ডোমেইন হোস্টিংয়ে চালাতে চাইলে আলাদা `nu-student-support-centre-hosting.zip` ব্যবহার করুন (এতে PHP admin আছে, GitHub লাগে না)।

## নতুন ডিজাইন ও কন্ট্রোল
- মোবাইলে নিচে WhatsApp / ফর্ম / কল বার, উপরে মেনু ড্রয়ার। ডেস্কটপে পুরো মেনু।
- অ্যাডমিনের "হোমপেজ, লোগো ও ছবি" বক্সে লোগো, হোমের মূল ছবি, সংখ্যার বক্স, "কীভাবে কাজ করে" ধাপ, প্রতিষ্ঠাতার বার্তা এবং কোন অংশ দেখাবেন তা বদলানো যায়।
- প্রতিটি সেবায় আইকন (ইমোজি) ও কভার ছবি দেওয়া যায়।
- "ডিজাইন ও রং" এ ১৭টি থিম।
