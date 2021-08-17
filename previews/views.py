from django.views import View
from django.http import JsonResponse
from django.shortcuts import render

import micawber


class PreviewAPIView(View):
    def get(self, request):
        providers = micawber.bootstrap_basic()
        if content_url := request.GET.get('url'):
            return JsonResponse(providers.request(content_url), status=200)
        return JsonResponse({'message': 'CHECK_INPUT_URLS'}, status=400)

    def index(request):
        return render(request, './previews/index.html')
