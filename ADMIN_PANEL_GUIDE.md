# ConnectWell Admin Panel Guide

## 🔐 Admin Access

Your email **`ghadaabdulaziz1@gmail.com`** is registered as an admin!

### How to Access Admin Panel

1. **Login** to ConnectWell with your email: `ghadaabdulaziz1@gmail.com`
2. After login, you'll see a **"Admin"** link in the navigation bar (purple shield icon)
3. Click it to access the **Admin Dashboard**

**Or go directly to:** `/admin/login`

---

## 🎯 Admin Panel Features

### 1. **Admin Dashboard** (`/admin/dashboard`)

**View:**
- 📊 Statistics (Total Therapists, Active Bookings, Community Posts)
- 🔍 Search therapists
- 📋 Complete therapist list in table format
- ⚡ Quick actions for each therapist

**Actions Available:**
- ✏️ **Edit** - Click edit icon to modify therapist details
- 🗑️ **Delete** - Click delete icon to remove therapist (with confirmation)
- ➕ **Add New** - Click "Add Therapist" button

---

### 2. **Add Therapist** (`/admin/therapists/new`)

**Comprehensive Form with:**

**Basic Information:**
- Full Name
- Professional Title
- Gender (Male, Female, Non-binary, Other)
- Years of Experience
- Hourly Rate
- Profile Image URL
- Bio

**Languages:** (Multi-select from 100+ options)
- Select from dropdown
- Click to add
- Remove with X button

**Nationalities:** (Multi-select from 180+ options)
- Select from dropdown
- Add multiple nationalities

**Specializations:** (From 33 therapy areas)
- Anxiety, Depression, CBT, EMDR, Trauma, etc.
- Multi-select with visual tags

**Certifications:** (15+ professional credentials)
- Licensed Professional Counselor (LPC)
- Psychologist (Ph.D.)
- Therapist certifications
- Multi-select

**Session Types:**
- ☑️ Online
- ☑️ In-person
- ☑️ Community

**Availability:**
- ☑️ Mon, Tue, Wed, Thu, Fri, Sat, Sun

**Validation:**
- All required fields checked
- At least 1 language required
- At least 1 nationality required
- Form won't submit until complete

---

### 3. **Edit Therapist** (`/admin/therapists/edit/[id]`)

**Same form as Add, but:**
- Pre-filled with existing therapist data
- Update button instead of Save
- All fields editable
- Preserves therapist ID

---

### 4. **Delete Therapist**

**From Dashboard:**
- Click 🗑️ trash icon
- Confirmation modal appears
- "Are you sure?" message
- Confirm or Cancel
- Instant removal from list

---

## 👥 Admin Users

Currently registered admins:
- ✅ `ghadaabdulaziz1@gmail.com` (YOU)
- ✅ `admin@connectwell.com`

**To add more admins:**
Edit `/Users/ghadaalani/connectwell/lib/admin.ts`:

```typescript
const ADMIN_EMAILS = [
  'ghadaabdulaziz1@gmail.com',
  'admin@connectwell.com',
  'another-admin@example.com', // Add new admin email here
];
```

---

## 🔒 Security Features

**Protected Routes:**
- Only logged-in users with admin emails can access `/admin/*`
- Automatic redirect to `/admin/login` if not logged in
- Automatic redirect to `/` if logged in but not admin
- Real-time auth state checking

**Admin Login:**
- Separate login page at `/admin/login`
- Purple/dark theme to distinguish from user login
- Verifies admin status before allowing access
- Shows "Access denied" if non-admin tries to login

---

## 📊 Admin Dashboard Features

**Statistics Cards:**
- Total Therapists count
- Active Bookings (mock: 124)
- Community Posts (mock: 1,234)

**Therapist Table:**
- Sortable columns
- Profile pictures
- Specializations (with +more badges)
- Languages (with +more count)
- Ratings and review counts
- Action buttons (Edit/Delete)

**Search:**
- Real-time search by name or specialization
- Instant filtering

---

## 🎨 Admin UI Design

**Color Scheme:**
- Purple/indigo gradients for admin areas
- Shield icon for admin branding
- Distinct from main user interface
- Professional admin look

**Components:**
- Responsive design
- Mobile-friendly
- Hover effects
- Loading states
- Error handling
- Success confirmations

---

## 🚀 How to Use After Deployment

### Step 1: Login as Admin
```
1. Go to: your-site.com/admin/login
2. Email: ghadaabdulaziz1@gmail.com
3. Password: [your password]
4. Click "Admin Sign In"
```

### Step 2: Manage Therapists
```
1. View all therapists in dashboard
2. Search/filter as needed
3. Click "Add Therapist" to create new
4. Click Edit icon to modify existing
5. Click Delete icon to remove
```

### Step 3: Add New Therapist
```
1. Click "Add Therapist" button
2. Fill in all required fields:
   - Name, title, bio, gender
   - Experience, rate, image
   - Languages (select multiple)
   - Nationalities (select multiple)
   - Specializations (select multiple)
   - Certifications (select multiple)
   - Session types (check boxes)
   - Availability (check days)
3. Click "Save Therapist"
4. Redirects to dashboard
5. New therapist appears in list!
```

### Step 4: Edit Therapist
```
1. Click edit icon (✏️) next to therapist
2. Form pre-fills with current data
3. Modify any fields
4. Click "Update Therapist"
5. Changes saved!
```

### Step 5: Delete Therapist
```
1. Click delete icon (🗑️) next to therapist
2. Confirmation modal appears
3. Click "Delete" to confirm
4. Therapist removed instantly
```

---

## 📝 All Admin Routes

- `/admin/login` - Admin login page
- `/admin/dashboard` - Main admin dashboard
- `/admin/therapists/new` - Add new therapist
- `/admin/therapists/edit/[id]` - Edit therapist

---

## ✅ What's Included

**Authentication:**
- ✅ Admin login page
- ✅ Admin role checking
- ✅ Protected admin routes
- ✅ Auto-redirect for non-admins

**Dashboard:**
- ✅ Statistics overview
- ✅ Therapist list table
- ✅ Search functionality
- ✅ Quick action buttons

**Add Therapist:**
- ✅ Complete form with all fields
- ✅ Multi-select for languages, nationalities, etc.
- ✅ Visual tag system
- ✅ Form validation
- ✅ Loading states

**Edit Therapist:**
- ✅ Pre-filled form
- ✅ Same fields as add
- ✅ Update functionality

**Delete Therapist:**
- ✅ Confirmation modal
- ✅ Instant removal
- ✅ Safe delete flow

**Navigation:**
- ✅ Admin link shows only for admin users
- ✅ Purple shield icon
- ✅ Desktop and mobile menu

---

## 🎉 Summary

You now have a **complete admin panel** with:

1. ✅ Separate admin login
2. ✅ Admin dashboard with stats
3. ✅ Add new therapists (full form)
4. ✅ Edit existing therapists
5. ✅ Delete therapists (with confirmation)
6. ✅ Search and filter
7. ✅ Role-based access control
8. ✅ Your email as admin

**All pushed to GitHub and ready to deploy!** 🚀

---

## 📱 Access Instructions

Once deployed with Firebase configured:

1. **Register/Login** with `ghadaabdulaziz1@gmail.com`
2. Look for **"Admin"** link in navigation (purple shield)
3. Click it to access admin dashboard
4. Manage all therapists from there!

---

**Want me to add any other admin features or deploy this now?** 🚀

