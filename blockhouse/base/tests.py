from django.test import TestCase
from .data import candlestick_data, line_chart_data, bar_chart_data, pie_chart_data
from .views import CandlestickDataView, LineChartDataView, BarChartDataView, PieChartDataView
from rest_framework.response import Response

class TestCandlestickDataView(TestCase):
    def test_candlestick_data(self):
        view = CandlestickDataView()
        response = view.get(None)
        self.assertEqual(response.data, candlestick_data)

class TestLineChartDataView(TestCase):
    def test_line_chart_data(self):
        view = LineChartDataView()
        response = view.get(None)
        self.assertEqual(response.data, line_chart_data)

class TestBarChartDataView(TestCase):
    def test_bar_chart_data(self):
        view = BarChartDataView()
        response = view.get(None)
        self.assertEqual(response.data, bar_chart_data)

class TestPieChartDataView(TestCase):
    def test_pie_chart_data(self):
        view = PieChartDataView()
        response = view.get(None)
        self.assertEqual(response.data, pie_chart_data)






from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from .data import candlestick_data, line_chart_data, bar_chart_data, pie_chart_data

class TestCandlestickDataAPI(APITestCase):
    def test_candlestick_data_endpoint(self):
        url = reverse('candlestick_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, candlestick_data)

class TestLineChartDataAPI(APITestCase):
    def test_line_chart_data_endpoint(self):
        url = reverse('line_chart_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, line_chart_data)

class TestBarChartDataAPI(APITestCase):
    def test_bar_chart_data_endpoint(self):
        url = reverse('bar_chart_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, bar_chart_data)

class TestPieChartDataAPI(APITestCase):
    def test_pie_chart_data_endpoint(self):
        url = reverse('pie_chart_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, pie_chart_data)
