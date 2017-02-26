<?php
function my_theme_enqueue_styles() {

    $parent_style = 'parent-style'; // This is 'twentyseventeen-style' for the Twenty Seventeen theme.

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );

    wp_enqueue_style( 'Tonyas Timer CSS', get_stylesheet_directory_uri() . '/tonyastimer/tonyastimer.css' );
    wp_enqueue_script( 'Tonyas Timer JS', get_stylesheet_directory_uri() . '/tonyastimer/tonyastimer.js', array( 'jquery' ), '', true );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
?>
