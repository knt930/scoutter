$(function () {
  $('input[name="sum_power[periods]"]:radio').change(function () {
    var radioval = $(this).val();
    window.location.href = `/rankings?period=${radioval}`;
  });
});
