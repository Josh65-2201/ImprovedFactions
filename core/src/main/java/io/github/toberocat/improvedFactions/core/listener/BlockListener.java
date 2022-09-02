package io.github.toberocat.improvedFactions.core.listener;

import io.github.toberocat.improvedFactions.core.claims.ClaimHandler;
import io.github.toberocat.improvedFactions.core.exceptions.faction.FactionNotInStorage;
import io.github.toberocat.improvedFactions.core.faction.Faction;
import io.github.toberocat.improvedFactions.core.faction.handler.FactionHandler;
import io.github.toberocat.improvedFactions.core.permission.FactionPermission;
import io.github.toberocat.improvedFactions.core.player.FactionPlayer;
import io.github.toberocat.improvedFactions.core.world.World;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class BlockListener {
    public boolean breakBlock(@NotNull FactionPlayer<?> player,
                              @NotNull World<?> world,
                              int chunkX, int chunkZ)
            throws FactionNotInStorage {
        Result result = getFaction(player, world, chunkX, chunkZ);
        if (result.result) return true;

        Faction<?> claimFaction = result.faction;
        if (claimFaction == null) return false;

        return !claimFaction.hasPermission(FactionPermission.BREAK_PERMISSION,
                claimFaction.getPlayerRank(player));
    }

    public boolean placeBlock(@NotNull FactionPlayer<?> player,
                              @NotNull World<?> world,
                              int chunkX, int chunkZ)
            throws FactionNotInStorage {

        Result result = getFaction(player, world, chunkX, chunkZ);
        if (result.result) return true;

        Faction<?> claimFaction = result.faction;
        if (claimFaction == null) return false;

        return !claimFaction.hasPermission(FactionPermission.PLACE_PERMISSION,
                claimFaction.getPlayerRank(player));
    }

    private @NotNull Result getFaction(@NotNull FactionPlayer<?> player,
                                       @NotNull World<?> world,
                                       int chunkX, int chunkZ) throws FactionNotInStorage {
        String registry = ClaimHandler.getWorldClaim(world).getRegistry(chunkX, chunkZ);
        if (registry == null) return new Result(false, null);

        String pRegistry = player.getFactionRegistry();
        if (pRegistry == null) return new Result(true, null);
        if (pRegistry.equals(registry)) return new Result(false, null);

        return new Result(false, FactionHandler.getFaction(registry));
    }

    protected record Result(boolean result, @Nullable Faction<?> faction) {

    }
}