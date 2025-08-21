import { mutation } from "./_generated/server";
import {v} from "convex/values";
import { query } from "./_generated/server";
export const CreateWorkspace= mutation({
    args:{
        messages:v.any(),
        user:v.id('users')
    },
    handler: async(ctx, args) => {
        const workspaceId = await ctx.db.insert('workspace',{
            messages:args.messages,
            user:args.user
        });
        return workspaceId;
    }
})   

export const GetMessages = query({
    args:{
        workspaceId:v.id('workspace')
    },
    handler: async(ctx, args) => {
        const result = await ctx.db.get(args.workspaceId);
        return result;
    }
})