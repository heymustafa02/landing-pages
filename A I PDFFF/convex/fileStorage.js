import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const AddFileEntry = mutation({
  // ... existing code ...
  handler: async (ctx, args) => {
    const result = await ctx.db.insert('pdfFiles', { // Changed from 'PdfFILE' to 'pdfFiles'
      // ... rest of the code
    });
    return "Inserted file";
  }
});

export const getFileRecord = query({
  // ... existing code ...
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query('pdfFiles') // Changed from 'PdfFILE' to 'pdfFiles'
      .filter((q) => q.eq(q.field('fileId'), args.fileId))
      .collect();
    console.log(result);
    return result;
  },
});

export const getUserFiles = query({
  args: {
    userEmail: v.string(),
  },
  handler: async (ctx, args) => {
    const files = await ctx.db
      .query('pdfFiles')
      .filter((q) => q.eq(q.field('userEmail'), args.userEmail))
      .collect();
    return files;
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const getFileUrl = mutation({
  // ... existing code ...
}); 