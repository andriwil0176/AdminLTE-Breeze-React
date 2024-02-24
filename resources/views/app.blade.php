<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        {{-- <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" /> --}}
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  {{-- <link rel="stylesheet" href="{{asset('storage/plugins/fontawesome-free/css/all.min.css')}}"> --}}
  <script src="https://kit.fontawesome.com/473a28b4f8.js" crossorigin="anonymous"></script>

  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Tempusdominus Bootstrap 4 -->
  <link rel="stylesheet" href="{{asset('storage/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}">
  <!-- iCheck -->
  <link rel="stylesheet" href="{{asset('storage/plugins/icheck-bootstrap/icheck-bootstrap.min.css')}}">
  <!-- JQVMap -->
  <link rel="stylesheet" href="{{asset('storage/plugins/jqvmap/jqvmap.min.css')}}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{asset('storage/dist/css/adminlte.min.css')}}">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="{{asset('storage/plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="{{asset('storage/plugins/daterangepicker/daterangepicker.css')}}">
  <!-- summernote -->
  <link rel="stylesheet" href="{{asset('storage/plugins/summernote/summernote-bs4.min.css')}}">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        {{-- @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"]) --}}

        <!-- Scripts -->
        @vite(['resources/sass/app.scss', 'resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
        @inertia

        
          <!-- Control Sidebar -->
          <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
          </aside>
          <!-- /.control-sidebar -->
        </div>
        <!-- ./wrapper -->
        
        <!-- jQuery -->
        <script src="{{asset('storage/plugins/jquery/jquery.min.js')}}"></script>
        <!-- jQuery UI 1.11.4 -->
        <script src="{{asset('storage/plugins/jquery-ui/jquery-ui.min.js')}}"></script>
        <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
        {{-- <script>
          $.widget.bridge('uibutton', $.ui.button)
        </script> --}}
        <!-- Bootstrap 4 -->
        {{-- <script src="{{asset('storage/plugins/bootstrap/js/bootstrap.bundle.min.js')}}""></script> --}}
        <!-- ChartJS -->
        <script src="{{asset('storage/plugins/chart.js/Chart.min.js')}}"></script>
        <!-- Sparkline -->
        {{-- <script src="{{asset('storage/plugins/sparklines/sparkline.j')}}s"></script> --}}
        <!-- JQVMap -->
        {{-- <script src="{{asset('storage/plugins/jqvmap/jquery.vmap.min.js')}}"></script> --}}
        {{-- <script src="{{asset('storage/plugins/jqvmap/maps/jquery.vmap.usa.js')}}"></script> --}}
        <!-- jQuery Knob Chart -->
        <script src="{{asset('storage/plugins/jquery-knob/jquery.knob.min.js')}}"></script>
        <!-- daterangepicker -->
        <script src="{{asset('storage/plugins/moment/moment.min.j')}}s"></script>
        <script src="{{asset('storage/plugins/daterangepicker/daterangepicker.js')}}"></script>
        <!-- Tempusdominus Bootstrap 4 -->
        {{-- <script src="{{asset('storage/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}}"></script> --}}
        <!-- Summernote -->
        <script src="{{asset('storage/plugins/summernote/summernote-bs4.min.js')}}"></script>
        <!-- overlayScrollbars -->
        <script src="{{asset('storage/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>
        <!-- AdminLTE App -->
        <script src="{{asset('storage/dist/js/adminlte.js')}}"></script>
        <!-- AdminLTE for demo purposes -->
        {{-- <script src="{{asset('storage/dist/js/demo.js')}}"></script> --}}
        <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        {{-- <script src="{{asset('storage/dist/js/pages/dashboard.js')}}"></script> --}}
    </body>

</html>
