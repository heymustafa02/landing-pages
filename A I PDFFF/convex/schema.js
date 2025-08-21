export default defineSchema({
  // ... existing tables ...
  notes: defineTable({
    fileId: v.string(),
    notes: v.string(),
    createdBy: v.string(),
  }),
}); 