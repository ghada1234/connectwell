# Deploying ConnectWell to Vercel

This guide will walk you through deploying the ConnectWell application to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier available)
- A [Google Gemini API key](https://makersuite.google.com/app/apikey)
- (Optional) A Firebase project for authentication

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy from the project directory**:
```bash
cd /Users/ghadaalani/connectwell
vercel
```

4. **Follow the prompts**:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (for first deployment)
   - What's your project's name? **connectwell** (or your preferred name)
   - In which directory is your code located? **./**
   - Want to modify these settings? **N**

5. **Set environment variables**:
```bash
vercel env add NEXT_PUBLIC_GEMINI_API_KEY
```
When prompted, paste your Gemini API key.

6. **Deploy to production**:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub**:
```bash
cd /Users/ghadaalani/connectwell
git init
git add .
git commit -m "Initial commit - ConnectWell application"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**:
   - In the project settings, go to "Environment Variables"
   - Add the following:
     ```
     Key: NEXT_PUBLIC_GEMINI_API_KEY
     Value: your_gemini_api_key_here
     ```
   - Select all environments (Production, Preview, Development)
   - Click "Save"

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)

### Option 3: Quick Deploy with Vercel Button

If you've pushed to GitHub, you can create a quick deploy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL&env=NEXT_PUBLIC_GEMINI_API_KEY)

## Environment Variables

### Required Variables

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `NEXT_PUBLIC_GEMINI_API_KEY` | Google Gemini API key for AI matching | [Google AI Studio](https://makersuite.google.com/app/apikey) |

### Optional Variables (for Firebase Authentication)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API Key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase App ID |

## Post-Deployment

After successful deployment:

1. **Test the application**:
   - Visit your deployment URL (e.g., `https://connectwell.vercel.app`)
   - Test the main features:
     - Browse therapists
     - Try the AI matching feature
     - Navigate through the community forum
     - Test authentication pages

2. **Custom Domain (Optional)**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow the DNS configuration instructions

3. **Monitor Performance**:
   - Check the Vercel Analytics tab
   - Monitor build logs for any errors
   - Review function execution logs

## Troubleshooting

### Build Errors

If you encounter build errors:

1. **Check the build logs** in Vercel dashboard
2. **Verify environment variables** are set correctly
3. **Test locally** first:
   ```bash
   npm run build
   npm start
   ```

### API Key Issues

If AI matching isn't working:

1. Verify `NEXT_PUBLIC_GEMINI_API_KEY` is set in Vercel
2. Check that the API key is valid in [Google AI Studio](https://makersuite.google.com/)
3. Ensure the key has proper permissions

### Common Issues

**Issue**: "Module not found" errors
- **Solution**: Run `npm install` locally and commit `package-lock.json`

**Issue**: Environment variables not loading
- **Solution**: Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access

**Issue**: Build timeout
- **Solution**: Optimize images and reduce bundle size

## Updating Your Deployment

To update your deployment after making changes:

### Using Vercel CLI:
```bash
git add .
git commit -m "Your update message"
vercel --prod
```

### Using GitHub Integration:
```bash
git add .
git commit -m "Your update message"
git push origin main
```
Vercel will automatically deploy the changes.

## Performance Optimization

After deployment, consider:

1. **Enable Analytics**: Vercel Analytics for performance monitoring
2. **Image Optimization**: Next.js automatically optimizes images
3. **Caching**: Leverage Vercel's Edge Network
4. **Speed Insights**: Enable Vercel Speed Insights

## Security Best Practices

1. **Never commit** `.env.local` or API keys to Git
2. **Use environment variables** for all sensitive data
3. **Enable HTTPS** (automatic with Vercel)
4. **Review permissions** on Firebase and Gemini API

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## Cost Considerations

- **Free Tier**: Includes:
  - Unlimited deployments
  - 100GB bandwidth/month
  - Serverless function executions
  - Perfect for development and small projects

- **Pro Tier**: For production apps with higher traffic
  - See [Vercel Pricing](https://vercel.com/pricing)

---

Your ConnectWell application should now be live and accessible worldwide! 🎉

