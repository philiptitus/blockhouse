from rest_framework.views import APIView
from rest_framework.response import Response
from .data import candlestick_data, line_chart_data, bar_chart_data, pie_chart_data

# Candlestick Data View
class CandlestickDataView(APIView):
    def get(self, request, *args, **kwargs):
        return Response(candlestick_data)

# Line Chart Data View
class LineChartDataView(APIView):
    def get(self, request, *args, **kwargs):
        return Response(line_chart_data)

# Bar Chart Data View
class BarChartDataView(APIView):
    def get(self, request, *args, **kwargs):
        return Response(bar_chart_data)

# Pie Chart Data View
class PieChartDataView(APIView):
    def get(self, request, *args, **kwargs):
        return Response(pie_chart_data)
