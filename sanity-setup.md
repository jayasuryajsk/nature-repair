# Setting Up Sanity Content Management

This document explains how to set up the Sanity Studio and add sample data to your Nature Repair website.

## Getting Started

1. First, make sure you've installed all dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Visit the Sanity Studio at http://localhost:3000/studio and log in with your Sanity account

## Adding Sample Data

We've created a script to automatically add sample property and owner data to your Sanity database. To use it:

1. Create a Sanity API token with the correct permissions:
   - Go to https://www.sanity.io/manage
   - Select your project
   - Navigate to API → Tokens
   - Click "Add API token"
   - Name it something like "Content Management"
   - **Important**: Set the permissions to "Editor" or higher (not just "Viewer")
   - Make sure the token has permissions to:
     - Create, update, and delete documents
     - Upload assets
   - Copy the token

2. Add the token to your .env.local file:
   - Open the .env.local file in your project root
   - Find or add the line: `SANITY_API_TOKEN=your_token_here`
   - Replace "your_token_here" with your actual token (the entire string)
   - Save the file

3. Run the seeding script:
   ```
   node scripts/seed-data.js
   ```

4. After the script completes, you should be able to view your content at:
   - Properties listing: http://localhost:3000/projects
   - Individual properties:
     - http://localhost:3000/projects/murray-darling-basin-wetland
     - http://localhost:3000/projects/great-dividing-range-forest

## Editing Content

Once you've added the sample data, you can edit it through the Sanity Studio:

1. Visit http://localhost:3000/studio
2. Select "Property" or "Property Owner" from the left sidebar
3. Click on any entry to edit it
4. Make your changes and click "Publish" to save

Your website will automatically update with the new content (within 60 seconds due to revalidation settings).

## Adding New Properties or Owners

To add new properties or owners manually:

1. Go to the Sanity Studio
2. Click "Property" or "Property Owner" in the sidebar
3. Click the "Create new" button in the top-right
4. Fill out the form and upload images
5. Click "Publish" to make it live

## Troubleshooting

If you encounter any issues:

- Make sure your Sanity API token has the correct permissions (Editor or higher)
- If you get "Insufficient permissions" errors, your token likely lacks create/write permissions
- Check that your .env.local file contains the correct project ID, dataset, and complete API token
- Ensure you're logged in to the Sanity Studio with the account that owns the project 