from django.urls import path
from .views import CandlestickDataView, LineChartDataView, BarChartDataView, PieChartDataView

urlpatterns = [
    path('candlestick-data/', CandlestickDataView.as_view(), name='candlestick_data'),
    path('line-chart-data/', LineChartDataView.as_view(), name='line_chart_data'),
    path('bar-chart-data/', BarChartDataView.as_view(), name='bar_chart_data'),
    path('pie-chart-data/', PieChartDataView.as_view(), name='pie_chart_data'),
]
