package io.github.toberocat.improvedfactions.annotations.papi

@Retention(AnnotationRetention.SOURCE)
@Target(AnnotationTarget.EXPRESSION)
annotation class PapiPlaceholder(
    val value: String,
    val module: String,
    val description: String = ""
)