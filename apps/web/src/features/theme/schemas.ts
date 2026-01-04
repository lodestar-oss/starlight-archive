import * as z from "zod";

const UserThemeSchema = z.enum(["light", "dark", "system"]).catch("system");
const AppThemeSchema = z.enum(["light", "dark"]).catch("light");

type UserTheme = z.infer<typeof UserThemeSchema>;
type AppTheme = z.infer<typeof AppThemeSchema>;

export { UserThemeSchema, AppThemeSchema };
export type { UserTheme, AppTheme };
