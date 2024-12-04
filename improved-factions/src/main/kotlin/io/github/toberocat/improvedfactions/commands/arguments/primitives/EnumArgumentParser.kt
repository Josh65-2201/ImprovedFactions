package io.github.toberocat.improvedfactions.commands.arguments.primitives

import io.github.toberocat.improvedfactions.commands.arguments.ArgumentParser
import io.github.toberocat.improvedfactions.commands.arguments.ParsingContext
import org.bukkit.command.CommandSender

open class EnumArgumentParser<E : Enum<E>>(private val clazz: Class<E>) : ArgumentParser {

    override fun parse(sender: CommandSender, arg: String, args: Array<String>): E =
        clazz.enumConstants.first { it.name.equals(arg, true) }

    override fun rawTabComplete(pCtx: ParsingContext) = clazz.enumConstants.map { it.name.lowercase() }
}