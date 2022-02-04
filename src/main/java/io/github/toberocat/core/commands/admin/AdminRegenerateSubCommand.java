package io.github.toberocat.core.commands.admin;

import io.github.toberocat.MainIF;
import io.github.toberocat.core.utility.claim.ClaimManager;
import io.github.toberocat.core.utility.command.SubCommand;
import io.github.toberocat.core.utility.data.DataAccess;
import io.github.toberocat.core.utility.data.PersistentDataUtility;
import io.github.toberocat.core.utility.factions.Faction;
import io.github.toberocat.core.utility.factions.FactionUtility;
import io.github.toberocat.core.utility.language.Language;
import org.bukkit.Bukkit;
import org.bukkit.Chunk;
import org.bukkit.World;
import org.bukkit.entity.Player;
import org.bukkit.persistence.PersistentDataHolder;
import org.bukkit.persistence.PersistentDataType;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class AdminRegenerateSubCommand extends SubCommand {
    public AdminRegenerateSubCommand() {
        super("regenerate", "", false);
    }

    @Override
    protected void CommandExecute(Player player, String[] args) {
        Language.sendRawMessage("Started regeneration of the data. This will repair corrupted registries for the worlds", player);

        Language.sendRawMessage("Loading all factions", player);
        for (String registry : DataAccess.listFiles("Factions")) {
            FactionUtility.getFactionByRegistry(registry);
        }

        Language.sendRawMessage("Generation for all players", player);
        for (Player onP : Bukkit.getOnlinePlayers()) {
            PersistentDataUtility.write(PersistentDataUtility.PLAYER_FACTION_REGISTRY, PersistentDataType.STRING,
                    null, onP.getPersistentDataContainer());
            Language.sendRawMessage("Resetted your data", player);

            for (Faction faction : Faction.getLoadedFactions().values()) {
                if (faction.getFactionMemberManager().getMembers().contains(onP.getUniqueId())) {
                    PersistentDataUtility.write(PersistentDataUtility.PLAYER_FACTION_REGISTRY, PersistentDataType.STRING,
                            faction.getRegistryName(), onP.getPersistentDataContainer());
                    Language.sendRawMessage("Loaded data from storage", player);
                    break;
                }
            }
        }

        Language.sendRawMessage("Regeneration of chunks. Starting garbage collection", player);
        for (World world : Bukkit.getWorlds()) {
            ArrayList<Chunk> chunks = new ArrayList<>(world.getForceLoadedChunks());
            chunks.addAll(List.of(world.getLoadedChunks()));

            for (Chunk chunk : chunks) {
                String registry = PersistentDataUtility.read(PersistentDataUtility.FACTION_CLAIMED_KEY,
                        PersistentDataType.STRING, chunk.getPersistentDataContainer());

                if (!FactionUtility.doesFactionExist(registry)) {
                    PersistentDataUtility.write(PersistentDataUtility.PLAYER_FACTION_REGISTRY, PersistentDataType.STRING,
                            null, chunk.getPersistentDataContainer());
                }

            }
        }

        Language.sendRawMessage("Finished regeneration. Restart the server to prevent RAM leaks. Currently every faction is loaded and uses max memory", player);
    }

    @Override
    protected List<String> CommandTab(Player player, String[] args) {
        return null;
    }
}
