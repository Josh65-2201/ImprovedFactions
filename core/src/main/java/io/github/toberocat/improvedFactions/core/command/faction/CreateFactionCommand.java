package io.github.toberocat.improvedFactions.core.command.faction;

import io.github.toberocat.improvedFactions.core.exceptions.TranslatableException;
import io.github.toberocat.improvedFactions.core.faction.Faction;
import io.github.toberocat.improvedFactions.core.faction.handler.FactionHandler;
import io.github.toberocat.improvedFactions.core.hints.Hints;
import io.github.toberocat.improvedFactions.core.player.FactionPlayer;
import io.github.toberocat.improvedFactions.core.translator.PlaceholderBuilder;
import io.github.toberocat.improvedFactions.core.utils.command.PlayerSubCommand;
import io.github.toberocat.improvedFactions.core.utils.command.exceptions.CommandException;
import io.github.toberocat.improvedFactions.core.utils.command.options.*;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.List;

public class CreateFactionCommand extends PlayerSubCommand {

    public static final List<String> TAB = List.of("faction-name");

    public CreateFactionCommand() {
        super("create", Options.getFromConfig("create", (options, config) -> options
                        .opt(new JoinedLiteralOption(config.getInt("max-spaces-in-name"))))
                .opt(new FactionOption(false))
                .opt(new ArgLengthOption(1, 20 * 5))
                .opt(new MaxArgLengthOption(0, Faction.MAX_FACTION_DISPLAY_LENGTH, 5 * 20)));
    }

    @Override
    protected boolean handle(@NotNull FactionPlayer player, @NotNull String[] args) throws CommandException {
        try {
            Faction<?> faction = create(player, args[0]);
            player.sendMessage("commands.create.created-faction", new PlaceholderBuilder()
                    .placeholder("faction", faction)
                    .getPlaceholders());
            Hints.playHint(player, "created-faction");
        } catch (TranslatableException e) {
            throw new CommandException(e);
        }
        return true;
    }

    @Override
    protected @Nullable List<String> getTab(@NotNull FactionPlayer player, @NotNull String[] args)
            throws CommandException {
        return TAB;
    }

    private @NotNull Faction<?> create(@NotNull FactionPlayer owner, @NotNull String display)
            throws TranslatableException {
        return FactionHandler.createFaction(display, owner);
    }
}
