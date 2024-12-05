package io.github.toberocat.improvedfactions.commands.arguments

import org.bukkit.command.CommandSender

interface ArgumentParser {
    fun parse(sender: CommandSender, idx: Int, args: Array<String>): Any? {
        if (idx >= args.size) return null

        return parse(sender, args[idx], args)
    }

    fun parse(sender: CommandSender, arg: String, args: Array<String>): Any


    fun tabComplete(pCtx: ParsingContext) =
        rawTabComplete(pCtx).ifEmpty { listOf(pCtx.resolveVariableName()) }

    fun rawTabComplete(pCtx: ParsingContext): List<String>
}