<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1, width=device-width, height=device-height, viewport-fit=cover">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          rel="stylesheet">
    <title>MyMoney</title>

    <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>


    <!-- bower:css -->
    <link rel="stylesheet"
          href="vendors/bootstrap/dist/css/bootstrap.min.css?v=<?php echo filemtime( __DIR__ . '/vendors/bootstrap/dist/css/bootstrap.min.css' ) ?>"/>
    <!-- endbower -->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />

    <link rel="stylesheet"
          href="assets/styles/style.css?v=<?php echo filemtime( __DIR__ . '/assets/styles/style.css' ) ?>">

    <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">

    <!-- bower:js -->
    <script src="vendors/angular/angular.min.js?v=<?php echo filemtime( __DIR__ . '/vendors/angular/angular.min.js' ) ?>"></script>
    <script src="vendors/jquery/dist/jquery.min.js?v=<?php echo filemtime( __DIR__ . '/vendors/jquery/dist/jquery.min.js' ) ?>"></script>
    <script src="vendors/bootstrap/dist/js/bootstrap.min.js?v=<?php echo filemtime( __DIR__ . '/vendors/bootstrap/dist/js/bootstrap.min.js' ) ?>"></script>
    <script src="vendors/ngMask/dist/ngMask.js?v=<?php echo filemtime( __DIR__ . '/vendors/ngMask/dist/ngMask.js' ) ?>"></script>
    <script src="vendors/angular-ui-router/release/angular-ui-router.js?v=<?php echo filemtime( __DIR__ . '/vendors/angular-ui-router/release/angular-ui-router.js' ) ?>"></script>
    <script src="vendors/angular-animate/angular-animate.js?v=<?php echo filemtime( __DIR__ . '/vendors/angular-animate/angular-animate.js' ) ?>"></script>
    <!-- endbower -->

    <!-- inject:js -->
    <script src="app.module.js?v=<?php echo filemtime( __DIR__ . '/app.module.js' ) ?>"></script>
    <script src="app.route.js?v=<?php echo filemtime( __DIR__ . '/app.route.js' ) ?>"></script>
    <script src="app.sdk.js?v=<?php echo filemtime( __DIR__ . '/app.sdk.js' ) ?>"></script>
    <script src="core/app.controller.js?v=<?php echo filemtime( __DIR__ . '/core/app.controller.js' ) ?>"></script>
    <script src="core/app.state.factory.js?v=<?php echo filemtime( __DIR__ . '/core/app.state.factory.js' ) ?>"></script>
    <script src="directives/directives.js?v=<?php echo filemtime( __DIR__ . '/directives/directives.js' ) ?>"></script>
    <!-- endinject -->
</head>

<body locale="default" lastScenario="default">
<div id="outer-wrap">
    <div id="inner-wrap">
        <div ui-view name="header"></div>
        <div ui-view class="main-content" name="content"></div>
        <div ui-view class="footer-content" name="footer"></div>
        <div id="ex1" class="modal">
            <h4>Configuration</h4>
            <p><a href="/?vision2020">Enable updated styles</a></p>
            <p><a href="/?novision">Disable InVision demos</a></p>
            <p><a href="/?dev">Enable development/test mode (no tracking)</a></p>
            <p><a href="/?nodev">Disable development/test mode</a></p>
            <p><a href="/?reset">Reset settings (except dev mode)</a></p>
            <p><a href="#" rel="modal:close">Close (esc)</a></p>
        </div>
        <a id="c-config"><i class="fa fa-cogs"></i><a id="c-config-trigger" href="#ex1" rel="modal:open"></a>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
<script src="data-countries.js?v=<?php echo filemtime( __DIR__ . '/data-countries.js' ) ?>"></script>
<script src="data-translations.js?v=<?php echo filemtime( __DIR__ . '/data-translations.js' ) ?>"></script>
<script src="general-scripts.js?v=<?php echo filemtime( __DIR__ . '/general-scripts.js' ) ?>"></script>

</body>
</html>
