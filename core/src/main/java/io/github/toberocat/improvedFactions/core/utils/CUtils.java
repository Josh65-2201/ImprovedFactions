package io.github.toberocat.improvedFactions.core.utils;

import io.github.toberocat.improvedFactions.core.handler.ConfigHandler;
import io.github.toberocat.improvedFactions.core.world.World;
import org.jetbrains.annotations.NotNull;

import java.net.MalformedURLException;
import java.net.URL;

public final class CUtils {
    public static URL createUrl(@NotNull String url) {
        try {
            return new URL(url);
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static boolean isWorldAllowed(@NotNull World world) {
        if (ConfigHandler.api().getList("world.enabled-worlds").contains(world.getWorldName())) return true;
        return !ConfigHandler.api().getList("world.disabled-worlds").contains(world.getWorldName());
    }

    public static byte[] convertToByteArray(int... pIntArray)
    {
        final byte[] array = new byte[pIntArray.length * 4];
        for (int j = 0; j < pIntArray.length; j++)
        {
            final int c = pIntArray[j];
            array[j * 4] = (byte)((c & 0xFF000000) >> 24);
            array[j * 4 + 1] = (byte)((c & 0xFF0000) >> 16);
            array[j * 4 + 2] = (byte)((c & 0xFF00) >> 8);
            array[j * 4 + 3] = (byte)(c & 0xFF);
        }
        return array;
    }
}