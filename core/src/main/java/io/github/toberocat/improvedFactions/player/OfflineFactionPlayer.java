package io.github.toberocat.improvedFactions.player;

import io.github.toberocat.improvedFactions.faction.Faction;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.UUID;

public interface OfflineFactionPlayer<P> {
    /* Faction */
    @NotNull Faction<?> getFaction();
    @Nullable String getFactionRegistry();

    boolean inFaction();

    /* Player */
    @Nullable FactionPlayer<?> getPlayer();
    @NotNull UUID getUnique();
    @NotNull String getName();
    long getLastPlayed();
    boolean isOnline();
}
