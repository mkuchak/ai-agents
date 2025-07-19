export interface LlmProvider {
  sample_spec: SampleSpec;
  "omni-moderation-latest": OmniModerationLatest;
  "omni-moderation-latest-intents": OmniModerationLatestIntents;
  "omni-moderation-2024-09-26": OmniModeration20240926;
  "gpt-4": Gpt4;
  "gpt-4.1": Gpt41;
  "gpt-4.1-2025-04-14": Gpt4120250414;
  "gpt-4.1-mini": Gpt41Mini;
  "gpt-4.1-mini-2025-04-14": Gpt41Mini20250414;
  "gpt-4.1-nano": Gpt41Nano;
  "gpt-4.1-nano-2025-04-14": Gpt41Nano20250414;
  "gpt-4o": Gpt4o;
  "watsonx/ibm/granite-3-8b-instruct": WatsonxIbmGranite38bInstruct;
  "watsonx/mistralai/mistral-large": WatsonxMistralaiMistralLarge;
  "gpt-4o-search-preview-2025-03-11": Gpt4oSearchPreview20250311;
  "gpt-4o-search-preview": Gpt4oSearchPreview;
  "gpt-4.5-preview": Gpt45Preview;
  "gpt-4.5-preview-2025-02-27": Gpt45Preview20250227;
  "gpt-4o-audio-preview": Gpt4oAudioPreview;
  "gpt-4o-audio-preview-2024-12-17": Gpt4oAudioPreview20241217;
  "gpt-4o-audio-preview-2024-10-01": Gpt4oAudioPreview20241001;
  "gpt-4o-audio-preview-2025-06-03": Gpt4oAudioPreview20250603;
  "gpt-4o-mini-audio-preview": Gpt4oMiniAudioPreview;
  "gpt-4o-mini-audio-preview-2024-12-17": Gpt4oMiniAudioPreview20241217;
  "gpt-4o-mini": Gpt4oMini;
  "gpt-4o-mini-search-preview-2025-03-11": Gpt4oMiniSearchPreview20250311;
  "gpt-4o-mini-search-preview": Gpt4oMiniSearchPreview;
  "gpt-4o-mini-2024-07-18": Gpt4oMini20240718;
  "codex-mini-latest": CodexMiniLatest;
  "o1-pro": O1Pro;
  "o1-pro-2025-03-19": O1Pro20250319;
  o1: O1;
  "o1-mini": O1Mini;
  "computer-use-preview": ComputerUsePreview;
  "o3-deep-research": O3DeepResearch;
  "o3-deep-research-2025-06-26": O3DeepResearch20250626;
  "o3-pro": O3Pro;
  "o3-pro-2025-06-10": O3Pro20250610;
  o3: O3;
  "o3-2025-04-16": O320250416;
  "o3-mini": O3Mini;
  "o3-mini-2025-01-31": O3Mini20250131;
  "o4-mini": O4Mini;
  "o4-mini-deep-research": O4MiniDeepResearch;
  "o4-mini-deep-research-2025-06-26": O4MiniDeepResearch20250626;
  "o4-mini-2025-04-16": O4Mini20250416;
  "o1-mini-2024-09-12": O1Mini20240912;
  "o1-preview": O1Preview;
  "o1-preview-2024-09-12": O1Preview20240912;
  "o1-2024-12-17": O120241217;
  "chatgpt-4o-latest": Chatgpt4oLatest;
  "gpt-4o-2024-05-13": Gpt4o20240513;
  "gpt-4o-2024-08-06": Gpt4o20240806;
  "gpt-4o-2024-11-20": Gpt4o20241120;
  "gpt-4o-realtime-preview-2024-10-01": Gpt4oRealtimePreview20241001;
  "gpt-4o-realtime-preview": Gpt4oRealtimePreview;
  "gpt-4o-realtime-preview-2024-12-17": Gpt4oRealtimePreview20241217;
  "gpt-4o-mini-realtime-preview": Gpt4oMiniRealtimePreview;
  "gpt-4o-mini-realtime-preview-2024-12-17": Gpt4oMiniRealtimePreview20241217;
  "gpt-4-turbo-preview": Gpt4TurboPreview;
  "gpt-4-0314": Gpt40314;
  "gpt-4-0613": Gpt40613;
  "gpt-4-32k": Gpt432k;
  "gpt-4-32k-0314": Gpt432k0314;
  "gpt-4-32k-0613": Gpt432k0613;
  "gpt-4-turbo": Gpt4Turbo;
  "gpt-4-turbo-2024-04-09": Gpt4Turbo20240409;
  "gpt-4-1106-preview": Gpt41106Preview;
  "gpt-4-0125-preview": Gpt40125Preview;
  "gpt-4-vision-preview": Gpt4VisionPreview;
  "gpt-4-1106-vision-preview": Gpt41106VisionPreview;
  "gpt-3.5-turbo": Gpt35Turbo;
  "gpt-3.5-turbo-0301": Gpt35Turbo0301;
  "gpt-3.5-turbo-0613": Gpt35Turbo0613;
  "gpt-3.5-turbo-1106": Gpt35Turbo1106;
  "gpt-3.5-turbo-0125": Gpt35Turbo0125;
  "gpt-3.5-turbo-16k": Gpt35Turbo16k;
  "gpt-3.5-turbo-16k-0613": Gpt35Turbo16k0613;
  "ft:gpt-3.5-turbo": FtGpt35Turbo;
  "ft:gpt-3.5-turbo-0125": FtGpt35Turbo0125;
  "ft:gpt-3.5-turbo-1106": FtGpt35Turbo1106;
  "ft:gpt-3.5-turbo-0613": FtGpt35Turbo0613;
  "ft:gpt-4-0613": FtGpt40613;
  "ft:gpt-4o-2024-08-06": FtGpt4o20240806;
  "ft:gpt-4o-2024-11-20": FtGpt4o20241120;
  "ft:gpt-4o-mini-2024-07-18": FtGpt4oMini20240718;
  "ft:davinci-002": FtDavinci002;
  "ft:babbage-002": FtBabbage002;
  "text-embedding-3-large": TextEmbedding3Large;
  "text-embedding-3-small": TextEmbedding3Small;
  "text-embedding-ada-002": TextEmbeddingAda002;
  "text-embedding-ada-002-v2": TextEmbeddingAda002V2;
  "text-moderation-stable": TextModerationStable;
  "text-moderation-007": TextModeration007;
  "text-moderation-latest": TextModerationLatest;
  "256-x-256/dall-e-2": N256X256DallE2;
  "512-x-512/dall-e-2": N512X512DallE2;
  "1024-x-1024/dall-e-2": N1024X1024DallE2;
  "hd/1024-x-1792/dall-e-3": Hd1024X1792DallE3;
  "hd/1792-x-1024/dall-e-3": Hd1792X1024DallE3;
  "hd/1024-x-1024/dall-e-3": Hd1024X1024DallE3;
  "standard/1024-x-1792/dall-e-3": Standard1024X1792DallE3;
  "standard/1792-x-1024/dall-e-3": Standard1792X1024DallE3;
  "standard/1024-x-1024/dall-e-3": Standard1024X1024DallE3;
  "gpt-image-1": GptImage1;
  "low/1024-x-1024/gpt-image-1": Low1024X1024GptImage1;
  "medium/1024-x-1024/gpt-image-1": Medium1024X1024GptImage1;
  "high/1024-x-1024/gpt-image-1": High1024X1024GptImage1;
  "low/1024-x-1536/gpt-image-1": Low1024X1536GptImage1;
  "medium/1024-x-1536/gpt-image-1": Medium1024X1536GptImage1;
  "high/1024-x-1536/gpt-image-1": High1024X1536GptImage1;
  "low/1536-x-1024/gpt-image-1": Low1536X1024GptImage1;
  "medium/1536-x-1024/gpt-image-1": Medium1536X1024GptImage1;
  "high/1536-x-1024/gpt-image-1": High1536X1024GptImage1;
  "gpt-4o-transcribe": Gpt4oTranscribe;
  "gpt-4o-mini-transcribe": Gpt4oMiniTranscribe;
  "whisper-1": Whisper1;
  "tts-1": Tts1;
  "tts-1-hd": Tts1Hd;
  "gpt-4o-mini-tts": Gpt4oMiniTts;
  "azure/gpt-4o-mini-tts": AzureGpt4oMiniTts;
  "azure/computer-use-preview": AzureComputerUsePreview;
  "azure/gpt-4o-audio-preview-2024-12-17": AzureGpt4oAudioPreview20241217;
  "azure/gpt-4o-mini-audio-preview-2024-12-17": AzureGpt4oMiniAudioPreview20241217;
  "azure/gpt-4.1": AzureGpt41;
  "azure/gpt-4.1-2025-04-14": AzureGpt4120250414;
  "azure/gpt-4.1-mini": AzureGpt41Mini;
  "azure/gpt-4.1-mini-2025-04-14": AzureGpt41Mini20250414;
  "azure/gpt-4.1-nano": AzureGpt41Nano;
  "azure/gpt-4.1-nano-2025-04-14": AzureGpt41Nano20250414;
  "azure/o3-pro": AzureO3Pro;
  "azure/o3-pro-2025-06-10": AzureO3Pro20250610;
  "azure/o3": AzureO3;
  "azure/o3-2025-04-16": AzureO320250416;
  "azure/o3-deep-research": AzureO3DeepResearch;
  "azure/o4-mini": AzureO4Mini;
  "azure/gpt-4o-mini-realtime-preview-2024-12-17": AzureGpt4oMiniRealtimePreview20241217;
  "azure/eu/gpt-4o-mini-realtime-preview-2024-12-17": AzureEuGpt4oMiniRealtimePreview20241217;
  "azure/us/gpt-4o-mini-realtime-preview-2024-12-17": AzureUsGpt4oMiniRealtimePreview20241217;
  "azure/gpt-4o-realtime-preview-2024-12-17": AzureGpt4oRealtimePreview20241217;
  "azure/us/gpt-4o-realtime-preview-2024-12-17": AzureUsGpt4oRealtimePreview20241217;
  "azure/eu/gpt-4o-realtime-preview-2024-12-17": AzureEuGpt4oRealtimePreview20241217;
  "azure/gpt-4o-realtime-preview-2024-10-01": AzureGpt4oRealtimePreview20241001;
  "azure/us/gpt-4o-realtime-preview-2024-10-01": AzureUsGpt4oRealtimePreview20241001;
  "azure/eu/gpt-4o-realtime-preview-2024-10-01": AzureEuGpt4oRealtimePreview20241001;
  "azure/o4-mini-2025-04-16": AzureO4Mini20250416;
  "azure/o3-mini-2025-01-31": AzureO3Mini20250131;
  "azure/us/o3-mini-2025-01-31": AzureUsO3Mini20250131;
  "azure/eu/o3-mini-2025-01-31": AzureEuO3Mini20250131;
  "azure/tts-1": AzureTts1;
  "azure/tts-1-hd": AzureTts1Hd;
  "azure/whisper-1": AzureWhisper1;
  "azure/gpt-4o-transcribe": AzureGpt4oTranscribe;
  "azure/gpt-4o-mini-transcribe": AzureGpt4oMiniTranscribe;
  "azure/o3-mini": AzureO3Mini;
  "azure/o1-mini": AzureO1Mini;
  "azure/o1-mini-2024-09-12": AzureO1Mini20240912;
  "azure/us/o1-mini-2024-09-12": AzureUsO1Mini20240912;
  "azure/eu/o1-mini-2024-09-12": AzureEuO1Mini20240912;
  "azure/o1": AzureO1;
  "azure/o1-2024-12-17": AzureO120241217;
  "azure/us/o1-2024-12-17": AzureUsO120241217;
  "azure/eu/o1-2024-12-17": AzureEuO120241217;
  "azure/codex-mini": AzureCodexMini;
  "azure/o1-preview": AzureO1Preview;
  "azure/o1-preview-2024-09-12": AzureO1Preview20240912;
  "azure/us/o1-preview-2024-09-12": AzureUsO1Preview20240912;
  "azure/eu/o1-preview-2024-09-12": AzureEuO1Preview20240912;
  "azure/gpt-4.5-preview": AzureGpt45Preview;
  "azure/gpt-4o": AzureGpt4o;
  "azure/global/gpt-4o-2024-11-20": AzureGlobalGpt4o20241120;
  "azure/gpt-4o-2024-08-06": AzureGpt4o20240806;
  "azure/global/gpt-4o-2024-08-06": AzureGlobalGpt4o20240806;
  "azure/gpt-4o-2024-11-20": AzureGpt4o20241120;
  "azure/us/gpt-4o-2024-11-20": AzureUsGpt4o20241120;
  "azure/eu/gpt-4o-2024-11-20": AzureEuGpt4o20241120;
  "azure/gpt-4o-2024-05-13": AzureGpt4o20240513;
  "azure/global-standard/gpt-4o-2024-08-06": AzureGlobalStandardGpt4o20240806;
  "azure/us/gpt-4o-2024-08-06": AzureUsGpt4o20240806;
  "azure/eu/gpt-4o-2024-08-06": AzureEuGpt4o20240806;
  "azure/global-standard/gpt-4o-2024-11-20": AzureGlobalStandardGpt4o20241120;
  "azure/global-standard/gpt-4o-mini": AzureGlobalStandardGpt4oMini;
  "azure/gpt-4o-mini": AzureGpt4oMini;
  "azure/gpt-4o-mini-2024-07-18": AzureGpt4oMini20240718;
  "azure/us/gpt-4o-mini-2024-07-18": AzureUsGpt4oMini20240718;
  "azure/eu/gpt-4o-mini-2024-07-18": AzureEuGpt4oMini20240718;
  "azure/gpt-4-turbo-2024-04-09": AzureGpt4Turbo20240409;
  "azure/gpt-4-0125-preview": AzureGpt40125Preview;
  "azure/gpt-4-1106-preview": AzureGpt41106Preview;
  "azure/gpt-4-0613": AzureGpt40613;
  "azure/gpt-4-32k-0613": AzureGpt432k0613;
  "azure/gpt-4-32k": AzureGpt432k;
  "azure/gpt-4": AzureGpt4;
  "azure/gpt-4-turbo": AzureGpt4Turbo;
  "azure/gpt-4-turbo-vision-preview": AzureGpt4TurboVisionPreview;
  "azure/gpt-35-turbo-16k-0613": AzureGpt35Turbo16k0613;
  "azure/gpt-35-turbo-1106": AzureGpt35Turbo1106;
  "azure/gpt-35-turbo-0613": AzureGpt35Turbo0613;
  "azure/gpt-35-turbo-0301": AzureGpt35Turbo0301;
  "azure/gpt-35-turbo-0125": AzureGpt35Turbo0125;
  "azure/gpt-3.5-turbo-0125": AzureGpt35Turbo01252;
  "azure/gpt-35-turbo-16k": AzureGpt35Turbo16k;
  "azure/gpt-35-turbo": AzureGpt35Turbo;
  "azure/gpt-3.5-turbo": AzureGpt35Turbo2;
  "azure/gpt-3.5-turbo-instruct-0914": AzureGpt35TurboInstruct0914;
  "azure/gpt-35-turbo-instruct": AzureGpt35TurboInstruct;
  "azure/gpt-35-turbo-instruct-0914": AzureGpt35TurboInstruct09142;
  "azure/mistral-large-latest": AzureMistralLargeLatest;
  "azure/mistral-large-2402": AzureMistralLarge2402;
  "azure/command-r-plus": AzureCommandRPlus;
  "azure/ada": AzureAda;
  "azure/text-embedding-ada-002": AzureTextEmbeddingAda002;
  "azure/text-embedding-3-large": AzureTextEmbedding3Large;
  "azure/text-embedding-3-small": AzureTextEmbedding3Small;
  "azure/gpt-image-1": AzureGptImage1;
  "azure/low/1024-x-1024/gpt-image-1": AzureLow1024X1024GptImage1;
  "azure/medium/1024-x-1024/gpt-image-1": AzureMedium1024X1024GptImage1;
  "azure/high/1024-x-1024/gpt-image-1": AzureHigh1024X1024GptImage1;
  "azure/low/1024-x-1536/gpt-image-1": AzureLow1024X1536GptImage1;
  "azure/medium/1024-x-1536/gpt-image-1": AzureMedium1024X1536GptImage1;
  "azure/high/1024-x-1536/gpt-image-1": AzureHigh1024X1536GptImage1;
  "azure/low/1536-x-1024/gpt-image-1": AzureLow1536X1024GptImage1;
  "azure/medium/1536-x-1024/gpt-image-1": AzureMedium1536X1024GptImage1;
  "azure/high/1536-x-1024/gpt-image-1": AzureHigh1536X1024GptImage1;
  "azure/standard/1024-x-1024/dall-e-3": AzureStandard1024X1024DallE3;
  "azure/hd/1024-x-1024/dall-e-3": AzureHd1024X1024DallE3;
  "azure/standard/1024-x-1792/dall-e-3": AzureStandard1024X1792DallE3;
  "azure/standard/1792-x-1024/dall-e-3": AzureStandard1792X1024DallE3;
  "azure/hd/1024-x-1792/dall-e-3": AzureHd1024X1792DallE3;
  "azure/hd/1792-x-1024/dall-e-3": AzureHd1792X1024DallE3;
  "azure/standard/1024-x-1024/dall-e-2": AzureStandard1024X1024DallE2;
  "azure_ai/grok-3": AzureAiGrok3;
  "azure_ai/global/grok-3": AzureAiGlobalGrok3;
  "azure_ai/global/grok-3-mini": AzureAiGlobalGrok3Mini;
  "azure_ai/grok-3-mini": AzureAiGrok3Mini;
  "azure_ai/deepseek-r1": AzureAiDeepseekR1;
  "azure_ai/deepseek-v3": AzureAiDeepseekV3;
  "azure_ai/deepseek-v3-0324": AzureAiDeepseekV30324;
  "azure_ai/jamba-instruct": AzureAiJambaInstruct;
  "azure_ai/jais-30b-chat": AzureAiJais30bChat;
  "azure_ai/mistral-nemo": AzureAiMistralNemo;
  "azure_ai/mistral-medium-2505": AzureAiMistralMedium2505;
  "azure_ai/mistral-large": AzureAiMistralLarge;
  "azure_ai/mistral-small": AzureAiMistralSmall;
  "azure_ai/mistral-small-2503": AzureAiMistralSmall2503;
  "azure_ai/mistral-large-2407": AzureAiMistralLarge2407;
  "azure_ai/mistral-large-latest": AzureAiMistralLargeLatest;
  "azure_ai/ministral-3b": AzureAiMinistral3b;
  "azure_ai/Llama-3.2-11B-Vision-Instruct": AzureAiLlama3211BVisionInstruct;
  "azure_ai/Llama-3.3-70B-Instruct": AzureAiLlama3370BInstruct;
  "azure_ai/Llama-4-Scout-17B-16E-Instruct": AzureAiLlama4Scout17B16EInstruct;
  "azure_ai/Llama-4-Maverick-17B-128E-Instruct-FP8": AzureAiLlama4Maverick17B128EInstructFp8;
  "azure_ai/Llama-3.2-90B-Vision-Instruct": AzureAiLlama3290BVisionInstruct;
  "azure_ai/Meta-Llama-3-70B-Instruct": AzureAiMetaLlama370BInstruct;
  "azure_ai/Meta-Llama-3.1-8B-Instruct": AzureAiMetaLlama318BInstruct;
  "azure_ai/Meta-Llama-3.1-70B-Instruct": AzureAiMetaLlama3170BInstruct;
  "azure_ai/Meta-Llama-3.1-405B-Instruct": AzureAiMetaLlama31405BInstruct;
  "azure_ai/Phi-4-mini-instruct": AzureAiPhi4MiniInstruct;
  "azure_ai/Phi-4-multimodal-instruct": AzureAiPhi4MultimodalInstruct;
  "azure_ai/Phi-4": AzureAiPhi4;
  "azure_ai/Phi-3.5-mini-instruct": AzureAiPhi35MiniInstruct;
  "azure_ai/Phi-3.5-vision-instruct": AzureAiPhi35VisionInstruct;
  "azure_ai/Phi-3.5-MoE-instruct": AzureAiPhi35MoEInstruct;
  "azure_ai/Phi-3-mini-4k-instruct": AzureAiPhi3Mini4kInstruct;
  "azure_ai/Phi-3-mini-128k-instruct": AzureAiPhi3Mini128kInstruct;
  "azure_ai/Phi-3-small-8k-instruct": AzureAiPhi3Small8kInstruct;
  "azure_ai/Phi-3-small-128k-instruct": AzureAiPhi3Small128kInstruct;
  "azure_ai/Phi-3-medium-4k-instruct": AzureAiPhi3Medium4kInstruct;
  "azure_ai/Phi-3-medium-128k-instruct": AzureAiPhi3Medium128kInstruct;
  "azure_ai/cohere-rerank-v3.5": AzureAiCohereRerankV35;
  "azure_ai/cohere-rerank-v3-multilingual": AzureAiCohereRerankV3Multilingual;
  "azure_ai/cohere-rerank-v3-english": AzureAiCohereRerankV3English;
  "azure_ai/Cohere-embed-v3-english": AzureAiCohereEmbedV3English;
  "azure_ai/Cohere-embed-v3-multilingual": AzureAiCohereEmbedV3Multilingual;
  "azure_ai/embed-v-4-0": AzureAiEmbedV40;
  "babbage-002": Babbage002;
  "davinci-002": Davinci002;
  "gpt-3.5-turbo-instruct": Gpt35TurboInstruct;
  "gpt-3.5-turbo-instruct-0914": Gpt35TurboInstruct0914;
  "mistral/mistral-tiny": MistralMistralTiny;
  "mistral/mistral-small": MistralMistralSmall;
  "mistral/mistral-small-latest": MistralMistralSmallLatest;
  "mistral/mistral-medium": MistralMistralMedium;
  "mistral/mistral-medium-latest": MistralMistralMediumLatest;
  "mistral/mistral-medium-2505": MistralMistralMedium2505;
  "mistral/mistral-medium-2312": MistralMistralMedium2312;
  "mistral/mistral-large-latest": MistralMistralLargeLatest;
  "mistral/mistral-large-2411": MistralMistralLarge2411;
  "mistral/mistral-large-2402": MistralMistralLarge2402;
  "mistral/mistral-large-2407": MistralMistralLarge2407;
  "mistral/pixtral-large-latest": MistralPixtralLargeLatest;
  "mistral/pixtral-large-2411": MistralPixtralLarge2411;
  "mistral/pixtral-12b-2409": MistralPixtral12b2409;
  "mistral/open-mistral-7b": MistralOpenMistral7b;
  "mistral/open-mixtral-8x7b": MistralOpenMixtral8x7b;
  "mistral/open-mixtral-8x22b": MistralOpenMixtral8x22b;
  "mistral/codestral-latest": MistralCodestralLatest;
  "mistral/codestral-2405": MistralCodestral2405;
  "mistral/open-mistral-nemo": MistralOpenMistralNemo;
  "mistral/open-mistral-nemo-2407": MistralOpenMistralNemo2407;
  "mistral/open-codestral-mamba": MistralOpenCodestralMamba;
  "mistral/codestral-mamba-latest": MistralCodestralMambaLatest;
  "mistral/devstral-small-2505": MistralDevstralSmall2505;
  "mistral/devstral-small-2507": MistralDevstralSmall2507;
  "mistral/devstral-medium-2507": MistralDevstralMedium2507;
  "mistral/magistral-medium-latest": MistralMagistralMediumLatest;
  "mistral/magistral-medium-2506": MistralMagistralMedium2506;
  "mistral/magistral-small-latest": MistralMagistralSmallLatest;
  "mistral/magistral-small-2506": MistralMagistralSmall2506;
  "mistral/mistral-embed": MistralMistralEmbed;
  "deepseek/deepseek-reasoner": DeepseekDeepseekReasoner;
  "deepseek/deepseek-chat": DeepseekDeepseekChat;
  "deepseek/deepseek-r1": DeepseekDeepseekR1;
  "deepseek/deepseek-v3": DeepseekDeepseekV3;
  "codestral/codestral-latest": CodestralCodestralLatest;
  "codestral/codestral-2405": CodestralCodestral2405;
  "text-completion-codestral/codestral-latest": TextCompletionCodestralCodestralLatest;
  "text-completion-codestral/codestral-2405": TextCompletionCodestralCodestral2405;
  "xai/grok-beta": XaiGrokBeta;
  "xai/grok-2-vision-1212": XaiGrok2Vision1212;
  "xai/grok-2-vision-latest": XaiGrok2VisionLatest;
  "xai/grok-2-vision": XaiGrok2Vision;
  "xai/grok-3": XaiGrok3;
  "xai/grok-3-latest": XaiGrok3Latest;
  "xai/grok-3-beta": XaiGrok3Beta;
  "xai/grok-3-fast-beta": XaiGrok3FastBeta;
  "xai/grok-3-fast-latest": XaiGrok3FastLatest;
  "xai/grok-3-mini": XaiGrok3Mini;
  "xai/grok-3-mini-latest": XaiGrok3MiniLatest;
  "xai/grok-3-mini-fast": XaiGrok3MiniFast;
  "xai/grok-3-mini-fast-latest": XaiGrok3MiniFastLatest;
  "xai/grok-3-mini-beta": XaiGrok3MiniBeta;
  "xai/grok-3-mini-fast-beta": XaiGrok3MiniFastBeta;
  "xai/grok-vision-beta": XaiGrokVisionBeta;
  "xai/grok-2-1212": XaiGrok21212;
  "xai/grok-2": XaiGrok2;
  "xai/grok-2-latest": XaiGrok2Latest;
  "xai/grok-4": XaiGrok4;
  "xai/grok-4-0709": XaiGrok40709;
  "xai/grok-4-latest": XaiGrok4Latest;
  "deepseek/deepseek-coder": DeepseekDeepseekCoder;
  "groq/deepseek-r1-distill-llama-70b": GroqDeepseekR1DistillLlama70b;
  "groq/llama-3.3-70b-versatile": GroqLlama3370bVersatile;
  "groq/llama-3.3-70b-specdec": GroqLlama3370bSpecdec;
  "groq/llama-guard-3-8b": GroqLlamaGuard38b;
  "groq/llama2-70b-4096": GroqLlama270b4096;
  "groq/llama3-8b-8192": GroqLlama38b8192;
  "groq/llama-3.2-1b-preview": GroqLlama321bPreview;
  "groq/llama-3.2-3b-preview": GroqLlama323bPreview;
  "groq/llama-3.2-11b-text-preview": GroqLlama3211bTextPreview;
  "groq/llama-3.2-11b-vision-preview": GroqLlama3211bVisionPreview;
  "groq/llama-3.2-90b-text-preview": GroqLlama3290bTextPreview;
  "groq/llama-3.2-90b-vision-preview": GroqLlama3290bVisionPreview;
  "groq/llama3-70b-8192": GroqLlama370b8192;
  "groq/llama-3.1-8b-instant": GroqLlama318bInstant;
  "groq/llama-3.1-70b-versatile": GroqLlama3170bVersatile;
  "groq/llama-3.1-405b-reasoning": GroqLlama31405bReasoning;
  "groq/meta-llama/llama-4-scout-17b-16e-instruct": GroqMetaLlamaLlama4Scout17b16eInstruct;
  "groq/meta-llama/llama-4-maverick-17b-128e-instruct": GroqMetaLlamaLlama4Maverick17b128eInstruct;
  "groq/mistral-saba-24b": GroqMistralSaba24b;
  "groq/mixtral-8x7b-32768": GroqMixtral8x7b32768;
  "groq/gemma-7b-it": GroqGemma7bIt;
  "groq/gemma2-9b-it": GroqGemma29bIt;
  "groq/llama3-groq-70b-8192-tool-use-preview": GroqLlama3Groq70b8192ToolUsePreview;
  "groq/llama3-groq-8b-8192-tool-use-preview": GroqLlama3Groq8b8192ToolUsePreview;
  "groq/qwen-qwq-32b": GroqQwenQwq32b;
  "groq/moonshotai-kimi-k2-instruct": GroqMoonshotaiKimiK2Instruct;
  "groq/playai-tts": GroqPlayaiTts;
  "groq/whisper-large-v3": GroqWhisperLargeV3;
  "groq/whisper-large-v3-turbo": GroqWhisperLargeV3Turbo;
  "groq/distil-whisper-large-v3-en": GroqDistilWhisperLargeV3En;
  "cerebras/llama3.1-8b": CerebrasLlama318b;
  "cerebras/llama3.1-70b": CerebrasLlama3170b;
  "cerebras/llama-3.3-70b": CerebrasLlama3370b;
  "cerebras/qwen-3-32b": CerebrasQwen332b;
  "friendliai/meta-llama-3.1-8b-instruct": FriendliaiMetaLlama318bInstruct;
  "friendliai/meta-llama-3.1-70b-instruct": FriendliaiMetaLlama3170bInstruct;
  "claude-2": Claude2;
  "claude-2.1": Claude21;
  "claude-3-haiku-20240307": Claude3Haiku20240307;
  "claude-3-5-haiku-20241022": Claude35Haiku20241022;
  "claude-3-5-haiku-latest": Claude35HaikuLatest;
  "claude-3-opus-latest": Claude3OpusLatest;
  "claude-3-opus-20240229": Claude3Opus20240229;
  "claude-3-sonnet-20240229": Claude3Sonnet20240229;
  "claude-3-5-sonnet-latest": Claude35SonnetLatest;
  "claude-3-5-sonnet-20240620": Claude35Sonnet20240620;
  "claude-opus-4-20250514": ClaudeOpus420250514;
  "claude-sonnet-4-20250514": ClaudeSonnet420250514;
  "claude-4-opus-20250514": Claude4Opus20250514;
  "claude-4-sonnet-20250514": Claude4Sonnet20250514;
  "claude-3-7-sonnet-latest": Claude37SonnetLatest;
  "claude-3-7-sonnet-20250219": Claude37Sonnet20250219;
  "claude-3-5-sonnet-20241022": Claude35Sonnet20241022;
  "text-bison": TextBison;
  "text-bison@001": TextBison001;
  "text-bison@002": TextBison002;
  "text-bison32k": TextBison32k;
  "text-bison32k@002": TextBison32k002;
  "text-unicorn": TextUnicorn;
  "text-unicorn@001": TextUnicorn001;
  "chat-bison": ChatBison;
  "chat-bison@001": ChatBison001;
  "chat-bison@002": ChatBison002;
  "chat-bison-32k": ChatBison32k;
  "chat-bison-32k@002": ChatBison32k002;
  "code-bison": CodeBison;
  "code-bison@001": CodeBison001;
  "code-bison@002": CodeBison002;
  "code-bison32k": CodeBison32k;
  "code-bison-32k@002": CodeBison32k002;
  "code-gecko@001": CodeGecko001;
  "code-gecko@002": CodeGecko002;
  "code-gecko": CodeGecko;
  "code-gecko-latest": CodeGeckoLatest;
  "codechat-bison@latest": CodechatBisonLatest;
  "codechat-bison": CodechatBison;
  "codechat-bison@001": CodechatBison001;
  "codechat-bison@002": CodechatBison002;
  "codechat-bison-32k": CodechatBison32k;
  "codechat-bison-32k@002": CodechatBison32k002;
  "meta_llama/Llama-4-Scout-17B-16E-Instruct-FP8": MetaLlamaLlama4Scout17B16EInstructFp8;
  "meta_llama/Llama-4-Maverick-17B-128E-Instruct-FP8": MetaLlamaLlama4Maverick17B128EInstructFp8;
  "meta_llama/Llama-3.3-70B-Instruct": MetaLlamaLlama3370BInstruct;
  "meta_llama/Llama-3.3-8B-Instruct": MetaLlamaLlama338BInstruct;
  "gemini-pro": GeminiPro;
  "gemini-1.0-pro": Gemini10Pro;
  "gemini-1.0-pro-001": Gemini10Pro001;
  "gemini-1.0-ultra": Gemini10Ultra;
  "gemini-1.0-ultra-001": Gemini10Ultra001;
  "gemini-1.0-pro-002": Gemini10Pro002;
  "gemini-1.5-pro": Gemini15Pro;
  "gemini-1.5-pro-002": Gemini15Pro002;
  "gemini-1.5-pro-001": Gemini15Pro001;
  "gemini-1.5-pro-preview-0514": Gemini15ProPreview0514;
  "gemini-1.5-pro-preview-0215": Gemini15ProPreview0215;
  "gemini-1.5-pro-preview-0409": Gemini15ProPreview0409;
  "gemini-1.5-flash": Gemini15Flash;
  "gemini-1.5-flash-exp-0827": Gemini15FlashExp0827;
  "gemini-1.5-flash-002": Gemini15Flash002;
  "gemini-1.5-flash-001": Gemini15Flash001;
  "gemini-1.5-flash-preview-0514": Gemini15FlashPreview0514;
  "gemini-pro-experimental": GeminiProExperimental;
  "gemini-flash-experimental": GeminiFlashExperimental;
  "gemini-pro-vision": GeminiProVision;
  "gemini-1.0-pro-vision": Gemini10ProVision;
  "gemini-1.0-pro-vision-001": Gemini10ProVision001;
  "medlm-medium": MedlmMedium;
  "medlm-large": MedlmLarge;
  "gemini-2.5-pro-exp-03-25": Gemini25ProExp0325;
  "gemini-2.0-pro-exp-02-05": Gemini20ProExp0205;
  "gemini-2.0-flash-exp": Gemini20FlashExp;
  "gemini-2.0-flash-001": Gemini20Flash001;
  "gemini-2.0-flash-thinking-exp": Gemini20FlashThinkingExp;
  "gemini-2.0-flash-thinking-exp-01-21": Gemini20FlashThinkingExp0121;
  "gemini-2.5-pro": Gemini25Pro;
  "gemini/gemini-2.5-pro-exp-03-25": GeminiGemini25ProExp0325;
  "gemini/gemini-2.5-pro": GeminiGemini25Pro;
  "gemini/gemini-2.5-flash": GeminiGemini25Flash;
  "gemini-2.5-flash": Gemini25Flash;
  "gemini/gemini-2.5-flash-preview-tts": GeminiGemini25FlashPreviewTts;
  "gemini/gemini-2.5-flash-preview-05-20": GeminiGemini25FlashPreview0520;
  "gemini/gemini-2.5-flash-preview-04-17": GeminiGemini25FlashPreview0417;
  "gemini/gemini-2.5-flash-lite-preview-06-17": GeminiGemini25FlashLitePreview0617;
  "gemini-2.5-flash-preview-05-20": Gemini25FlashPreview0520;
  "gemini-2.5-flash-preview-04-17": Gemini25FlashPreview0417;
  "gemini-2.5-flash-lite-preview-06-17": Gemini25FlashLitePreview0617;
  "gemini-2.0-flash": Gemini20Flash;
  "gemini-2.0-flash-lite": Gemini20FlashLite;
  "gemini-2.0-flash-lite-001": Gemini20FlashLite001;
  "gemini-2.5-pro-preview-06-05": Gemini25ProPreview0605;
  "gemini-2.5-pro-preview-05-06": Gemini25ProPreview0506;
  "gemini-2.5-pro-preview-03-25": Gemini25ProPreview0325;
  "gemini-2.0-flash-preview-image-generation": Gemini20FlashPreviewImageGeneration;
  "gemini-2.5-pro-preview-tts": Gemini25ProPreviewTts;
  "gemini/gemini-2.0-pro-exp-02-05": GeminiGemini20ProExp0205;
  "gemini/gemini-2.0-flash-preview-image-generation": GeminiGemini20FlashPreviewImageGeneration;
  "gemini/gemini-2.0-flash": GeminiGemini20Flash;
  "gemini/gemini-2.0-flash-lite": GeminiGemini20FlashLite;
  "gemini/gemini-2.0-flash-001": GeminiGemini20Flash001;
  "gemini/gemini-2.5-pro-preview-tts": GeminiGemini25ProPreviewTts;
  "gemini/gemini-2.5-pro-preview-06-05": GeminiGemini25ProPreview0605;
  "gemini/gemini-2.5-pro-preview-05-06": GeminiGemini25ProPreview0506;
  "gemini/gemini-2.5-pro-preview-03-25": GeminiGemini25ProPreview0325;
  "gemini/gemini-2.0-flash-exp": GeminiGemini20FlashExp;
  "gemini/gemini-2.0-flash-lite-preview-02-05": GeminiGemini20FlashLitePreview0205;
  "gemini/gemini-2.0-flash-thinking-exp": GeminiGemini20FlashThinkingExp;
  "gemini/gemini-2.0-flash-thinking-exp-01-21": GeminiGemini20FlashThinkingExp0121;
  "gemini/gemma-3-27b-it": GeminiGemma327bIt;
  "gemini/learnlm-1.5-pro-experimental": GeminiLearnlm15ProExperimental;
  "vertex_ai/claude-3-sonnet": VertexAiClaude3Sonnet;
  "vertex_ai/claude-3-sonnet@20240229": VertexAiClaude3Sonnet20240229;
  "vertex_ai/claude-3-5-sonnet": VertexAiClaude35Sonnet;
  "vertex_ai/claude-3-5-sonnet@20240620": VertexAiClaude35Sonnet20240620;
  "vertex_ai/claude-3-5-sonnet-v2": VertexAiClaude35SonnetV2;
  "vertex_ai/claude-3-5-sonnet-v2@20241022": VertexAiClaude35SonnetV220241022;
  "vertex_ai/claude-3-7-sonnet@20250219": VertexAiClaude37Sonnet20250219;
  "vertex_ai/claude-opus-4": VertexAiClaudeOpus4;
  "vertex_ai/claude-opus-4@20250514": VertexAiClaudeOpus420250514;
  "vertex_ai/claude-sonnet-4": VertexAiClaudeSonnet4;
  "vertex_ai/claude-sonnet-4@20250514": VertexAiClaudeSonnet420250514;
  "vertex_ai/claude-3-haiku": VertexAiClaude3Haiku;
  "vertex_ai/claude-3-haiku@20240307": VertexAiClaude3Haiku20240307;
  "vertex_ai/claude-3-5-haiku": VertexAiClaude35Haiku;
  "vertex_ai/claude-3-5-haiku@20241022": VertexAiClaude35Haiku20241022;
  "vertex_ai/claude-3-opus": VertexAiClaude3Opus;
  "vertex_ai/claude-3-opus@20240229": VertexAiClaude3Opus20240229;
  "vertex_ai/meta/llama3-405b-instruct-maas": VertexAiMetaLlama3405bInstructMaas;
  "vertex_ai/meta/llama-4-scout-17b-16e-instruct-maas": VertexAiMetaLlama4Scout17b16eInstructMaas;
  "vertex_ai/meta/llama-4-scout-17b-128e-instruct-maas": VertexAiMetaLlama4Scout17b128eInstructMaas;
  "vertex_ai/meta/llama-4-maverick-17b-128e-instruct-maas": VertexAiMetaLlama4Maverick17b128eInstructMaas;
  "vertex_ai/meta/llama-4-maverick-17b-16e-instruct-maas": VertexAiMetaLlama4Maverick17b16eInstructMaas;
  "vertex_ai/meta/llama3-70b-instruct-maas": VertexAiMetaLlama370bInstructMaas;
  "vertex_ai/meta/llama3-8b-instruct-maas": VertexAiMetaLlama38bInstructMaas;
  "vertex_ai/meta/llama-3.2-90b-vision-instruct-maas": VertexAiMetaLlama3290bVisionInstructMaas;
  "vertex_ai/mistral-large@latest": VertexAiMistralLargeLatest;
  "vertex_ai/mistral-large@2411-001": VertexAiMistralLarge2411001;
  "vertex_ai/mistral-large-2411": VertexAiMistralLarge2411;
  "vertex_ai/mistral-large@2407": VertexAiMistralLarge2407;
  "vertex_ai/mistral-nemo@latest": VertexAiMistralNemoLatest;
  "vertex_ai/mistral-small-2503@001": VertexAiMistralSmall2503001;
  "vertex_ai/mistral-small-2503": VertexAiMistralSmall2503;
  "vertex_ai/jamba-1.5-mini@001": VertexAiJamba15Mini001;
  "vertex_ai/jamba-1.5-large@001": VertexAiJamba15Large001;
  "vertex_ai/jamba-1.5": VertexAiJamba15;
  "vertex_ai/jamba-1.5-mini": VertexAiJamba15Mini;
  "vertex_ai/jamba-1.5-large": VertexAiJamba15Large;
  "vertex_ai/mistral-nemo@2407": VertexAiMistralNemo2407;
  "vertex_ai/codestral@latest": VertexAiCodestralLatest;
  "vertex_ai/codestral@2405": VertexAiCodestral2405;
  "vertex_ai/codestral-2501": VertexAiCodestral2501;
  "vertex_ai/imagegeneration@006": VertexAiImagegeneration006;
  "vertex_ai/imagen-4.0-generate-preview-06-06": VertexAiImagen40GeneratePreview0606;
  "vertex_ai/imagen-4.0-ultra-generate-preview-06-06": VertexAiImagen40UltraGeneratePreview0606;
  "vertex_ai/imagen-4.0-fast-generate-preview-06-06": VertexAiImagen40FastGeneratePreview0606;
  "vertex_ai/imagen-3.0-generate-002": VertexAiImagen30Generate002;
  "vertex_ai/imagen-3.0-generate-001": VertexAiImagen30Generate001;
  "vertex_ai/imagen-3.0-fast-generate-001": VertexAiImagen30FastGenerate001;
  "text-embedding-004": TextEmbedding004;
  "gemini-embedding-001": GeminiEmbedding001;
  "text-embedding-005": TextEmbedding005;
  "text-multilingual-embedding-002": TextMultilingualEmbedding002;
  multimodalembedding: Multimodalembedding;
  "multimodalembedding@001": Multimodalembedding001;
  "text-embedding-large-exp-03-07": TextEmbeddingLargeExp0307;
  "textembedding-gecko": TextembeddingGecko;
  "textembedding-gecko-multilingual": TextembeddingGeckoMultilingual;
  "textembedding-gecko-multilingual@001": TextembeddingGeckoMultilingual001;
  "textembedding-gecko@001": TextembeddingGecko001;
  "textembedding-gecko@003": TextembeddingGecko003;
  "text-embedding-preview-0409": TextEmbeddingPreview0409;
  "text-multilingual-embedding-preview-0409": TextMultilingualEmbeddingPreview0409;
  "palm/chat-bison": PalmChatBison;
  "palm/chat-bison-001": PalmChatBison001;
  "palm/text-bison": PalmTextBison;
  "palm/text-bison-001": PalmTextBison001;
  "palm/text-bison-safety-off": PalmTextBisonSafetyOff;
  "palm/text-bison-safety-recitation-off": PalmTextBisonSafetyRecitationOff;
  "gemini/gemini-1.5-flash-002": GeminiGemini15Flash002;
  "gemini/gemini-1.5-flash-001": GeminiGemini15Flash001;
  "gemini/gemini-1.5-flash": GeminiGemini15Flash;
  "gemini/gemini-1.5-flash-latest": GeminiGemini15FlashLatest;
  "gemini/gemini-1.5-flash-8b": GeminiGemini15Flash8b;
  "gemini/gemini-1.5-flash-8b-exp-0924": GeminiGemini15Flash8bExp0924;
  "gemini/gemini-exp-1114": GeminiGeminiExp1114;
  "gemini/gemini-exp-1206": GeminiGeminiExp1206;
  "gemini/gemini-1.5-flash-exp-0827": GeminiGemini15FlashExp0827;
  "gemini/gemini-1.5-flash-8b-exp-0827": GeminiGemini15Flash8bExp0827;
  "gemini/gemini-pro": GeminiGeminiPro;
  "gemini/gemini-1.5-pro": GeminiGemini15Pro;
  "gemini/gemini-1.5-pro-002": GeminiGemini15Pro002;
  "gemini/gemini-1.5-pro-001": GeminiGemini15Pro001;
  "gemini/gemini-1.5-pro-exp-0801": GeminiGemini15ProExp0801;
  "gemini/gemini-1.5-pro-exp-0827": GeminiGemini15ProExp0827;
  "gemini/gemini-1.5-pro-latest": GeminiGemini15ProLatest;
  "gemini/gemini-pro-vision": GeminiGeminiProVision;
  "gemini/gemini-gemma-2-27b-it": GeminiGeminiGemma227bIt;
  "gemini/gemini-gemma-2-9b-it": GeminiGeminiGemma29bIt;
  "command-a-03-2025": CommandA032025;
  "command-r": CommandR;
  "command-r-08-2024": CommandR082024;
  "command-r7b-12-2024": CommandR7b122024;
  "command-light": CommandLight;
  "command-r-plus": CommandRPlus;
  "command-r-plus-08-2024": CommandRPlus082024;
  "command-nightly": CommandNightly;
  command: Command;
  "rerank-v3.5": RerankV35;
  "rerank-english-v3.0": RerankEnglishV30;
  "rerank-multilingual-v3.0": RerankMultilingualV30;
  "rerank-english-v2.0": RerankEnglishV20;
  "rerank-multilingual-v2.0": RerankMultilingualV20;
  "embed-english-light-v3.0": EmbedEnglishLightV30;
  "embed-multilingual-v3.0": EmbedMultilingualV30;
  "embed-english-v2.0": EmbedEnglishV20;
  "embed-english-light-v2.0": EmbedEnglishLightV20;
  "embed-multilingual-v2.0": EmbedMultilingualV20;
  "embed-english-v3.0": EmbedEnglishV30;
  "replicate/meta/llama-2-13b": ReplicateMetaLlama213b;
  "replicate/meta/llama-2-13b-chat": ReplicateMetaLlama213bChat;
  "replicate/meta/llama-2-70b": ReplicateMetaLlama270b;
  "replicate/meta/llama-2-70b-chat": ReplicateMetaLlama270bChat;
  "replicate/meta/llama-2-7b": ReplicateMetaLlama27b;
  "replicate/meta/llama-2-7b-chat": ReplicateMetaLlama27bChat;
  "replicate/meta/llama-3-70b": ReplicateMetaLlama370b;
  "replicate/meta/llama-3-70b-instruct": ReplicateMetaLlama370bInstruct;
  "replicate/meta/llama-3-8b": ReplicateMetaLlama38b;
  "replicate/meta/llama-3-8b-instruct": ReplicateMetaLlama38bInstruct;
  "replicate/mistralai/mistral-7b-v0.1": ReplicateMistralaiMistral7bV01;
  "replicate/mistralai/mistral-7b-instruct-v0.2": ReplicateMistralaiMistral7bInstructV02;
  "replicate/mistralai/mixtral-8x7b-instruct-v0.1": ReplicateMistralaiMixtral8x7bInstructV01;
  "openrouter/deepseek/deepseek-r1-0528": OpenrouterDeepseekDeepseekR10528;
  "openrouter/deepseek/deepseek-r1": OpenrouterDeepseekDeepseekR1;
  "openrouter/deepseek/deepseek-chat": OpenrouterDeepseekDeepseekChat;
  "openrouter/deepseek/deepseek-coder": OpenrouterDeepseekDeepseekCoder;
  "openrouter/microsoft/wizardlm-2-8x22b:nitro": OpenrouterMicrosoftWizardlm28x22bNitro;
  "openrouter/google/gemini-2.5-pro": OpenrouterGoogleGemini25Pro;
  "openrouter/google/gemini-pro-1.5": OpenrouterGoogleGeminiPro15;
  "openrouter/google/gemini-2.0-flash-001": OpenrouterGoogleGemini20Flash001;
  "openrouter/google/gemini-2.5-flash": OpenrouterGoogleGemini25Flash;
  "openrouter/mistralai/mixtral-8x22b-instruct": OpenrouterMistralaiMixtral8x22bInstruct;
  "openrouter/cohere/command-r-plus": OpenrouterCohereCommandRPlus;
  "openrouter/databricks/dbrx-instruct": OpenrouterDatabricksDbrxInstruct;
  "openrouter/anthropic/claude-3-haiku": OpenrouterAnthropicClaude3Haiku;
  "openrouter/anthropic/claude-3-5-haiku": OpenrouterAnthropicClaude35Haiku;
  "openrouter/anthropic/claude-3-haiku-20240307": OpenrouterAnthropicClaude3Haiku20240307;
  "openrouter/anthropic/claude-3-5-haiku-20241022": OpenrouterAnthropicClaude35Haiku20241022;
  "openrouter/anthropic/claude-3.5-sonnet": OpenrouterAnthropicClaude35Sonnet;
  "openrouter/anthropic/claude-3.5-sonnet:beta": OpenrouterAnthropicClaude35SonnetBeta;
  "openrouter/anthropic/claude-3.7-sonnet": OpenrouterAnthropicClaude37Sonnet;
  "openrouter/anthropic/claude-3.7-sonnet:beta": OpenrouterAnthropicClaude37SonnetBeta;
  "openrouter/anthropic/claude-3-sonnet": OpenrouterAnthropicClaude3Sonnet;
  "openrouter/anthropic/claude-sonnet-4": OpenrouterAnthropicClaudeSonnet4;
  "openrouter/mistralai/mistral-large": OpenrouterMistralaiMistralLarge;
  "openrouter/mistralai/mistral-small-3.1-24b-instruct": OpenrouterMistralaiMistralSmall3124bInstruct;
  "openrouter/mistralai/mistral-small-3.2-24b-instruct": OpenrouterMistralaiMistralSmall3224bInstruct;
  "openrouter/cognitivecomputations/dolphin-mixtral-8x7b": OpenrouterCognitivecomputationsDolphinMixtral8x7b;
  "openrouter/google/gemini-pro-vision": OpenrouterGoogleGeminiProVision;
  "openrouter/fireworks/firellava-13b": OpenrouterFireworksFirellava13b;
  "openrouter/meta-llama/llama-3-8b-instruct:free": OpenrouterMetaLlamaLlama38bInstructFree;
  "openrouter/meta-llama/llama-3-8b-instruct:extended": OpenrouterMetaLlamaLlama38bInstructExtended;
  "openrouter/meta-llama/llama-3-70b-instruct:nitro": OpenrouterMetaLlamaLlama370bInstructNitro;
  "openrouter/meta-llama/llama-3-70b-instruct": OpenrouterMetaLlamaLlama370bInstruct;
  "openrouter/openai/o1": OpenrouterOpenaiO1;
  "openrouter/openai/o1-mini": OpenrouterOpenaiO1Mini;
  "openrouter/openai/o1-mini-2024-09-12": OpenrouterOpenaiO1Mini20240912;
  "openrouter/openai/o1-preview": OpenrouterOpenaiO1Preview;
  "openrouter/openai/o1-preview-2024-09-12": OpenrouterOpenaiO1Preview20240912;
  "openrouter/openai/o3-mini": OpenrouterOpenaiO3Mini;
  "openrouter/openai/o3-mini-high": OpenrouterOpenaiO3MiniHigh;
  "openrouter/openai/gpt-4o": OpenrouterOpenaiGpt4o;
  "openrouter/openai/gpt-4o-2024-05-13": OpenrouterOpenaiGpt4o20240513;
  "openrouter/openai/gpt-4-vision-preview": OpenrouterOpenaiGpt4VisionPreview;
  "openrouter/openai/gpt-3.5-turbo": OpenrouterOpenaiGpt35Turbo;
  "openrouter/openai/gpt-3.5-turbo-16k": OpenrouterOpenaiGpt35Turbo16k;
  "openrouter/openai/gpt-4": OpenrouterOpenaiGpt4;
  "openrouter/anthropic/claude-instant-v1": OpenrouterAnthropicClaudeInstantV1;
  "openrouter/anthropic/claude-2": OpenrouterAnthropicClaude2;
  "openrouter/anthropic/claude-3-opus": OpenrouterAnthropicClaude3Opus;
  "openrouter/google/palm-2-chat-bison": OpenrouterGooglePalm2ChatBison;
  "openrouter/google/palm-2-codechat-bison": OpenrouterGooglePalm2CodechatBison;
  "openrouter/meta-llama/llama-2-13b-chat": OpenrouterMetaLlamaLlama213bChat;
  "openrouter/meta-llama/llama-2-70b-chat": OpenrouterMetaLlamaLlama270bChat;
  "openrouter/meta-llama/codellama-34b-instruct": OpenrouterMetaLlamaCodellama34bInstruct;
  "openrouter/nousresearch/nous-hermes-llama2-13b": OpenrouterNousresearchNousHermesLlama213b;
  "openrouter/mancer/weaver": OpenrouterMancerWeaver;
  "openrouter/gryphe/mythomax-l2-13b": OpenrouterGrypheMythomaxL213b;
  "openrouter/jondurbin/airoboros-l2-70b-2.1": OpenrouterJondurbinAiroborosL270b21;
  "openrouter/undi95/remm-slerp-l2-13b": OpenrouterUndi95RemmSlerpL213b;
  "openrouter/pygmalionai/mythalion-13b": OpenrouterPygmalionaiMythalion13b;
  "openrouter/mistralai/mistral-7b-instruct": OpenrouterMistralaiMistral7bInstruct;
  "openrouter/mistralai/mistral-7b-instruct:free": OpenrouterMistralaiMistral7bInstructFree;
  "openrouter/qwen/qwen-2.5-coder-32b-instruct": OpenrouterQwenQwen25Coder32bInstruct;
  "j2-ultra": J2Ultra;
  "jamba-1.5-mini@001": Jamba15Mini001;
  "jamba-1.5-large@001": Jamba15Large001;
  "jamba-1.5": Jamba15;
  "jamba-1.5-mini": Jamba15Mini;
  "jamba-1.5-large": Jamba15Large;
  "jamba-large-1.6": JambaLarge16;
  "jamba-large-1.7": JambaLarge17;
  "jamba-mini-1.6": JambaMini16;
  "jamba-mini-1.7": JambaMini17;
  "j2-mid": J2Mid;
  "j2-light": J2Light;
  dolphin: Dolphin;
  chatdolphin: Chatdolphin;
  "luminous-base": LuminousBase;
  "luminous-base-control": LuminousBaseControl;
  "luminous-extended": LuminousExtended;
  "luminous-extended-control": LuminousExtendedControl;
  "luminous-supreme": LuminousSupreme;
  "luminous-supreme-control": LuminousSupremeControl;
  "ai21.j2-mid-v1": Ai21J2MidV1;
  "ai21.j2-ultra-v1": Ai21J2UltraV1;
  "ai21.jamba-instruct-v1:0": Ai21JambaInstructV10;
  "ai21.jamba-1-5-large-v1:0": Ai21Jamba15LargeV10;
  "ai21.jamba-1-5-mini-v1:0": Ai21Jamba15MiniV10;
  "amazon.rerank-v1:0": AmazonRerankV10;
  "amazon.titan-text-lite-v1": AmazonTitanTextLiteV1;
  "amazon.titan-text-express-v1": AmazonTitanTextExpressV1;
  "amazon.titan-text-premier-v1:0": AmazonTitanTextPremierV10;
  "amazon.titan-embed-text-v1": AmazonTitanEmbedTextV1;
  "amazon.titan-embed-text-v2:0": AmazonTitanEmbedTextV20;
  "amazon.titan-embed-image-v1": AmazonTitanEmbedImageV1;
  "mistral.mistral-7b-instruct-v0:2": MistralMistral7bInstructV02;
  "mistral.mixtral-8x7b-instruct-v0:1": MistralMixtral8x7bInstructV01;
  "mistral.mistral-large-2402-v1:0": MistralMistralLarge2402V10;
  "mistral.mistral-large-2407-v1:0": MistralMistralLarge2407V10;
  "mistral.mistral-small-2402-v1:0": MistralMistralSmall2402V10;
  "eu.mistral.pixtral-large-2502-v1:0": EuMistralPixtralLarge2502V10;
  "us.mistral.pixtral-large-2502-v1:0": UsMistralPixtralLarge2502V10;
  "bedrock/us-west-2/mistral.mixtral-8x7b-instruct-v0:1": BedrockUsWest2MistralMixtral8x7bInstructV01;
  "bedrock/us-east-1/mistral.mixtral-8x7b-instruct-v0:1": BedrockUsEast1MistralMixtral8x7bInstructV01;
  "bedrock/eu-west-3/mistral.mixtral-8x7b-instruct-v0:1": BedrockEuWest3MistralMixtral8x7bInstructV01;
  "bedrock/us-west-2/mistral.mistral-7b-instruct-v0:2": BedrockUsWest2MistralMistral7bInstructV02;
  "bedrock/us-east-1/mistral.mistral-7b-instruct-v0:2": BedrockUsEast1MistralMistral7bInstructV02;
  "bedrock/eu-west-3/mistral.mistral-7b-instruct-v0:2": BedrockEuWest3MistralMistral7bInstructV02;
  "bedrock/us-east-1/mistral.mistral-large-2402-v1:0": BedrockUsEast1MistralMistralLarge2402V10;
  "bedrock/us-west-2/mistral.mistral-large-2402-v1:0": BedrockUsWest2MistralMistralLarge2402V10;
  "bedrock/eu-west-3/mistral.mistral-large-2402-v1:0": BedrockEuWest3MistralMistralLarge2402V10;
  "amazon.nova-micro-v1:0": AmazonNovaMicroV10;
  "us.amazon.nova-micro-v1:0": UsAmazonNovaMicroV10;
  "eu.amazon.nova-micro-v1:0": EuAmazonNovaMicroV10;
  "amazon.nova-lite-v1:0": AmazonNovaLiteV10;
  "us.amazon.nova-lite-v1:0": UsAmazonNovaLiteV10;
  "eu.amazon.nova-lite-v1:0": EuAmazonNovaLiteV10;
  "amazon.nova-pro-v1:0": AmazonNovaProV10;
  "us.amazon.nova-pro-v1:0": UsAmazonNovaProV10;
  "1024-x-1024/50-steps/bedrock/amazon.nova-canvas-v1:0": N1024X102450StepsBedrockAmazonNovaCanvasV10;
  "eu.amazon.nova-pro-v1:0": EuAmazonNovaProV10;
  "apac.amazon.nova-micro-v1:0": ApacAmazonNovaMicroV10;
  "apac.amazon.nova-lite-v1:0": ApacAmazonNovaLiteV10;
  "apac.amazon.nova-pro-v1:0": ApacAmazonNovaProV10;
  "us.amazon.nova-premier-v1:0": UsAmazonNovaPremierV10;
  "anthropic.claude-3-sonnet-20240229-v1:0": AnthropicClaude3Sonnet20240229V10;
  "bedrock/invoke/anthropic.claude-3-5-sonnet-20240620-v1:0": BedrockInvokeAnthropicClaude35Sonnet20240620V10;
  "anthropic.claude-3-5-sonnet-20240620-v1:0": AnthropicClaude35Sonnet20240620V10;
  "anthropic.claude-opus-4-20250514-v1:0": AnthropicClaudeOpus420250514V10;
  "anthropic.claude-sonnet-4-20250514-v1:0": AnthropicClaudeSonnet420250514V10;
  "anthropic.claude-3-7-sonnet-20250219-v1:0": AnthropicClaude37Sonnet20250219V10;
  "anthropic.claude-3-5-sonnet-20241022-v2:0": AnthropicClaude35Sonnet20241022V20;
  "anthropic.claude-3-haiku-20240307-v1:0": AnthropicClaude3Haiku20240307V10;
  "anthropic.claude-3-5-haiku-20241022-v1:0": AnthropicClaude35Haiku20241022V10;
  "anthropic.claude-3-opus-20240229-v1:0": AnthropicClaude3Opus20240229V10;
  "us.anthropic.claude-3-sonnet-20240229-v1:0": UsAnthropicClaude3Sonnet20240229V10;
  "us.anthropic.claude-3-5-sonnet-20240620-v1:0": UsAnthropicClaude35Sonnet20240620V10;
  "us.anthropic.claude-3-5-sonnet-20241022-v2:0": UsAnthropicClaude35Sonnet20241022V20;
  "us.anthropic.claude-3-7-sonnet-20250219-v1:0": UsAnthropicClaude37Sonnet20250219V10;
  "us.anthropic.claude-opus-4-20250514-v1:0": UsAnthropicClaudeOpus420250514V10;
  "us.anthropic.claude-sonnet-4-20250514-v1:0": UsAnthropicClaudeSonnet420250514V10;
  "us.anthropic.claude-3-haiku-20240307-v1:0": UsAnthropicClaude3Haiku20240307V10;
  "us.anthropic.claude-3-5-haiku-20241022-v1:0": UsAnthropicClaude35Haiku20241022V10;
  "us.anthropic.claude-3-opus-20240229-v1:0": UsAnthropicClaude3Opus20240229V10;
  "eu.anthropic.claude-3-sonnet-20240229-v1:0": EuAnthropicClaude3Sonnet20240229V10;
  "eu.anthropic.claude-3-5-sonnet-20240620-v1:0": EuAnthropicClaude35Sonnet20240620V10;
  "eu.anthropic.claude-3-5-sonnet-20241022-v2:0": EuAnthropicClaude35Sonnet20241022V20;
  "eu.anthropic.claude-3-7-sonnet-20250219-v1:0": EuAnthropicClaude37Sonnet20250219V10;
  "eu.anthropic.claude-3-haiku-20240307-v1:0": EuAnthropicClaude3Haiku20240307V10;
  "eu.anthropic.claude-opus-4-20250514-v1:0": EuAnthropicClaudeOpus420250514V10;
  "eu.anthropic.claude-sonnet-4-20250514-v1:0": EuAnthropicClaudeSonnet420250514V10;
  "apac.anthropic.claude-3-haiku-20240307-v1:0": ApacAnthropicClaude3Haiku20240307V10;
  "apac.anthropic.claude-3-sonnet-20240229-v1:0": ApacAnthropicClaude3Sonnet20240229V10;
  "apac.anthropic.claude-3-5-sonnet-20240620-v1:0": ApacAnthropicClaude35Sonnet20240620V10;
  "apac.anthropic.claude-3-5-sonnet-20241022-v2:0": ApacAnthropicClaude35Sonnet20241022V20;
  "apac.anthropic.claude-sonnet-4-20250514-v1:0": ApacAnthropicClaudeSonnet420250514V10;
  "eu.anthropic.claude-3-5-haiku-20241022-v1:0": EuAnthropicClaude35Haiku20241022V10;
  "eu.anthropic.claude-3-opus-20240229-v1:0": EuAnthropicClaude3Opus20240229V10;
  "anthropic.claude-v1": AnthropicClaudeV1;
  "bedrock/us-east-1/anthropic.claude-v1": BedrockUsEast1AnthropicClaudeV1;
  "bedrock/us-west-2/anthropic.claude-v1": BedrockUsWest2AnthropicClaudeV1;
  "bedrock/ap-northeast-1/anthropic.claude-v1": BedrockApNortheast1AnthropicClaudeV1;
  "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v1": BedrockApNortheast11MonthCommitmentAnthropicClaudeV1;
  "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v1": BedrockApNortheast16MonthCommitmentAnthropicClaudeV1;
  "bedrock/eu-central-1/anthropic.claude-v1": BedrockEuCentral1AnthropicClaudeV1;
  "bedrock/eu-central-1/1-month-commitment/anthropic.claude-v1": BedrockEuCentral11MonthCommitmentAnthropicClaudeV1;
  "bedrock/eu-central-1/6-month-commitment/anthropic.claude-v1": BedrockEuCentral16MonthCommitmentAnthropicClaudeV1;
  "bedrock/us-east-1/1-month-commitment/anthropic.claude-v1": BedrockUsEast11MonthCommitmentAnthropicClaudeV1;
  "bedrock/us-east-1/6-month-commitment/anthropic.claude-v1": BedrockUsEast16MonthCommitmentAnthropicClaudeV1;
  "bedrock/us-west-2/1-month-commitment/anthropic.claude-v1": BedrockUsWest21MonthCommitmentAnthropicClaudeV1;
  "bedrock/us-west-2/6-month-commitment/anthropic.claude-v1": BedrockUsWest26MonthCommitmentAnthropicClaudeV1;
  "anthropic.claude-v2": AnthropicClaudeV2;
  "bedrock/us-east-1/anthropic.claude-v2": BedrockUsEast1AnthropicClaudeV2;
  "bedrock/us-west-2/anthropic.claude-v2": BedrockUsWest2AnthropicClaudeV2;
  "bedrock/ap-northeast-1/anthropic.claude-v2": BedrockApNortheast1AnthropicClaudeV2;
  "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v2": BedrockApNortheast11MonthCommitmentAnthropicClaudeV2;
  "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v2": BedrockApNortheast16MonthCommitmentAnthropicClaudeV2;
  "bedrock/eu-central-1/anthropic.claude-v2": BedrockEuCentral1AnthropicClaudeV2;
  "bedrock/eu-central-1/1-month-commitment/anthropic.claude-v2": BedrockEuCentral11MonthCommitmentAnthropicClaudeV2;
  "bedrock/eu-central-1/6-month-commitment/anthropic.claude-v2": BedrockEuCentral16MonthCommitmentAnthropicClaudeV2;
  "bedrock/us-east-1/1-month-commitment/anthropic.claude-v2": BedrockUsEast11MonthCommitmentAnthropicClaudeV2;
  "bedrock/us-east-1/6-month-commitment/anthropic.claude-v2": BedrockUsEast16MonthCommitmentAnthropicClaudeV2;
  "bedrock/us-west-2/1-month-commitment/anthropic.claude-v2": BedrockUsWest21MonthCommitmentAnthropicClaudeV2;
  "bedrock/us-west-2/6-month-commitment/anthropic.claude-v2": BedrockUsWest26MonthCommitmentAnthropicClaudeV2;
  "anthropic.claude-v2:1": AnthropicClaudeV21;
  "bedrock/us-east-1/anthropic.claude-v2:1": BedrockUsEast1AnthropicClaudeV21;
  "bedrock/us-west-2/anthropic.claude-v2:1": BedrockUsWest2AnthropicClaudeV21;
  "bedrock/ap-northeast-1/anthropic.claude-v2:1": BedrockApNortheast1AnthropicClaudeV21;
  "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v2:1": BedrockApNortheast11MonthCommitmentAnthropicClaudeV21;
  "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v2:1": BedrockApNortheast16MonthCommitmentAnthropicClaudeV21;
  "bedrock/eu-central-1/anthropic.claude-v2:1": BedrockEuCentral1AnthropicClaudeV21;
  "bedrock/eu-central-1/1-month-commitment/anthropic.claude-v2:1": BedrockEuCentral11MonthCommitmentAnthropicClaudeV21;
  "bedrock/eu-central-1/6-month-commitment/anthropic.claude-v2:1": BedrockEuCentral16MonthCommitmentAnthropicClaudeV21;
  "bedrock/us-east-1/1-month-commitment/anthropic.claude-v2:1": BedrockUsEast11MonthCommitmentAnthropicClaudeV21;
  "bedrock/us-east-1/6-month-commitment/anthropic.claude-v2:1": BedrockUsEast16MonthCommitmentAnthropicClaudeV21;
  "bedrock/us-west-2/1-month-commitment/anthropic.claude-v2:1": BedrockUsWest21MonthCommitmentAnthropicClaudeV21;
  "bedrock/us-west-2/6-month-commitment/anthropic.claude-v2:1": BedrockUsWest26MonthCommitmentAnthropicClaudeV21;
  "anthropic.claude-instant-v1": AnthropicClaudeInstantV1;
  "bedrock/us-east-1/anthropic.claude-instant-v1": BedrockUsEast1AnthropicClaudeInstantV1;
  "bedrock/us-east-1/1-month-commitment/anthropic.claude-instant-v1": BedrockUsEast11MonthCommitmentAnthropicClaudeInstantV1;
  "bedrock/us-east-1/6-month-commitment/anthropic.claude-instant-v1": BedrockUsEast16MonthCommitmentAnthropicClaudeInstantV1;
  "bedrock/us-west-2/1-month-commitment/anthropic.claude-instant-v1": BedrockUsWest21MonthCommitmentAnthropicClaudeInstantV1;
  "bedrock/us-west-2/6-month-commitment/anthropic.claude-instant-v1": BedrockUsWest26MonthCommitmentAnthropicClaudeInstantV1;
  "bedrock/us-west-2/anthropic.claude-instant-v1": BedrockUsWest2AnthropicClaudeInstantV1;
  "bedrock/ap-northeast-1/anthropic.claude-instant-v1": BedrockApNortheast1AnthropicClaudeInstantV1;
  "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-instant-v1": BedrockApNortheast11MonthCommitmentAnthropicClaudeInstantV1;
  "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-instant-v1": BedrockApNortheast16MonthCommitmentAnthropicClaudeInstantV1;
  "bedrock/eu-central-1/anthropic.claude-instant-v1": BedrockEuCentral1AnthropicClaudeInstantV1;
  "bedrock/eu-central-1/1-month-commitment/anthropic.claude-instant-v1": BedrockEuCentral11MonthCommitmentAnthropicClaudeInstantV1;
  "bedrock/eu-central-1/6-month-commitment/anthropic.claude-instant-v1": BedrockEuCentral16MonthCommitmentAnthropicClaudeInstantV1;
  "cohere.rerank-v3-5:0": CohereRerankV350;
  "cohere.command-text-v14": CohereCommandTextV14;
  "bedrock/*/1-month-commitment/cohere.command-text-v14": Bedrock1MonthCommitmentCohereCommandTextV14;
  "bedrock/*/6-month-commitment/cohere.command-text-v14": Bedrock6MonthCommitmentCohereCommandTextV14;
  "cohere.command-light-text-v14": CohereCommandLightTextV14;
  "bedrock/*/1-month-commitment/cohere.command-light-text-v14": Bedrock1MonthCommitmentCohereCommandLightTextV14;
  "bedrock/*/6-month-commitment/cohere.command-light-text-v14": Bedrock6MonthCommitmentCohereCommandLightTextV14;
  "cohere.command-r-plus-v1:0": CohereCommandRPlusV10;
  "cohere.command-r-v1:0": CohereCommandRV10;
  "cohere.embed-english-v3": CohereEmbedEnglishV3;
  "cohere.embed-multilingual-v3": CohereEmbedMultilingualV3;
  "us.deepseek.r1-v1:0": UsDeepseekR1V10;
  "meta.llama3-3-70b-instruct-v1:0": MetaLlama3370bInstructV10;
  "meta.llama2-13b-chat-v1": MetaLlama213bChatV1;
  "meta.llama2-70b-chat-v1": MetaLlama270bChatV1;
  "meta.llama3-8b-instruct-v1:0": MetaLlama38bInstructV10;
  "bedrock/us-east-1/meta.llama3-8b-instruct-v1:0": BedrockUsEast1MetaLlama38bInstructV10;
  "bedrock/us-west-1/meta.llama3-8b-instruct-v1:0": BedrockUsWest1MetaLlama38bInstructV10;
  "bedrock/ap-south-1/meta.llama3-8b-instruct-v1:0": BedrockApSouth1MetaLlama38bInstructV10;
  "bedrock/ca-central-1/meta.llama3-8b-instruct-v1:0": BedrockCaCentral1MetaLlama38bInstructV10;
  "bedrock/eu-west-1/meta.llama3-8b-instruct-v1:0": BedrockEuWest1MetaLlama38bInstructV10;
  "bedrock/eu-west-2/meta.llama3-8b-instruct-v1:0": BedrockEuWest2MetaLlama38bInstructV10;
  "bedrock/sa-east-1/meta.llama3-8b-instruct-v1:0": BedrockSaEast1MetaLlama38bInstructV10;
  "meta.llama3-70b-instruct-v1:0": MetaLlama370bInstructV10;
  "bedrock/us-east-1/meta.llama3-70b-instruct-v1:0": BedrockUsEast1MetaLlama370bInstructV10;
  "bedrock/us-west-1/meta.llama3-70b-instruct-v1:0": BedrockUsWest1MetaLlama370bInstructV10;
  "bedrock/ap-south-1/meta.llama3-70b-instruct-v1:0": BedrockApSouth1MetaLlama370bInstructV10;
  "bedrock/ca-central-1/meta.llama3-70b-instruct-v1:0": BedrockCaCentral1MetaLlama370bInstructV10;
  "bedrock/eu-west-1/meta.llama3-70b-instruct-v1:0": BedrockEuWest1MetaLlama370bInstructV10;
  "bedrock/eu-west-2/meta.llama3-70b-instruct-v1:0": BedrockEuWest2MetaLlama370bInstructV10;
  "bedrock/sa-east-1/meta.llama3-70b-instruct-v1:0": BedrockSaEast1MetaLlama370bInstructV10;
  "meta.llama3-1-8b-instruct-v1:0": MetaLlama318bInstructV10;
  "us.meta.llama3-1-8b-instruct-v1:0": UsMetaLlama318bInstructV10;
  "meta.llama3-1-70b-instruct-v1:0": MetaLlama3170bInstructV10;
  "us.meta.llama3-1-70b-instruct-v1:0": UsMetaLlama3170bInstructV10;
  "meta.llama3-1-405b-instruct-v1:0": MetaLlama31405bInstructV10;
  "us.meta.llama3-1-405b-instruct-v1:0": UsMetaLlama31405bInstructV10;
  "meta.llama3-2-1b-instruct-v1:0": MetaLlama321bInstructV10;
  "us.meta.llama3-2-1b-instruct-v1:0": UsMetaLlama321bInstructV10;
  "eu.meta.llama3-2-1b-instruct-v1:0": EuMetaLlama321bInstructV10;
  "meta.llama3-2-3b-instruct-v1:0": MetaLlama323bInstructV10;
  "us.meta.llama3-2-3b-instruct-v1:0": UsMetaLlama323bInstructV10;
  "eu.meta.llama3-2-3b-instruct-v1:0": EuMetaLlama323bInstructV10;
  "meta.llama3-2-11b-instruct-v1:0": MetaLlama3211bInstructV10;
  "us.meta.llama3-2-11b-instruct-v1:0": UsMetaLlama3211bInstructV10;
  "meta.llama3-2-90b-instruct-v1:0": MetaLlama3290bInstructV10;
  "us.meta.llama3-2-90b-instruct-v1:0": UsMetaLlama3290bInstructV10;
  "us.meta.llama3-3-70b-instruct-v1:0": UsMetaLlama3370bInstructV10;
  "meta.llama4-maverick-17b-instruct-v1:0": MetaLlama4Maverick17bInstructV10;
  "us.meta.llama4-maverick-17b-instruct-v1:0": UsMetaLlama4Maverick17bInstructV10;
  "meta.llama4-scout-17b-instruct-v1:0": MetaLlama4Scout17bInstructV10;
  "us.meta.llama4-scout-17b-instruct-v1:0": UsMetaLlama4Scout17bInstructV10;
  "512-x-512/50-steps/stability.stable-diffusion-xl-v0": N512X51250StepsStabilityStableDiffusionXlV0;
  "512-x-512/max-steps/stability.stable-diffusion-xl-v0": N512X512MaxStepsStabilityStableDiffusionXlV0;
  "max-x-max/50-steps/stability.stable-diffusion-xl-v0": MaxXMax50StepsStabilityStableDiffusionXlV0;
  "max-x-max/max-steps/stability.stable-diffusion-xl-v0": MaxXMaxMaxStepsStabilityStableDiffusionXlV0;
  "1024-x-1024/50-steps/stability.stable-diffusion-xl-v1": N1024X102450StepsStabilityStableDiffusionXlV1;
  "1024-x-1024/max-steps/stability.stable-diffusion-xl-v1": N1024X1024MaxStepsStabilityStableDiffusionXlV1;
  "stability.sd3-large-v1:0": StabilitySd3LargeV10;
  "stability.sd3-5-large-v1:0": StabilitySd35LargeV10;
  "stability.stable-image-core-v1:0": StabilityStableImageCoreV10;
  "stability.stable-image-core-v1:1": StabilityStableImageCoreV11;
  "stability.stable-image-ultra-v1:0": StabilityStableImageUltraV10;
  "stability.stable-image-ultra-v1:1": StabilityStableImageUltraV11;
  "sagemaker/meta-textgeneration-llama-2-7b": SagemakerMetaTextgenerationLlama27b;
  "sagemaker/meta-textgeneration-llama-2-7b-f": SagemakerMetaTextgenerationLlama27bF;
  "sagemaker/meta-textgeneration-llama-2-13b": SagemakerMetaTextgenerationLlama213b;
  "sagemaker/meta-textgeneration-llama-2-13b-f": SagemakerMetaTextgenerationLlama213bF;
  "sagemaker/meta-textgeneration-llama-2-70b": SagemakerMetaTextgenerationLlama270b;
  "sagemaker/meta-textgeneration-llama-2-70b-b-f": SagemakerMetaTextgenerationLlama270bBF;
  "together-ai-up-to-4b": TogetherAiUpTo4b;
  "together-ai-4.1b-8b": TogetherAi41b8b;
  "together-ai-8.1b-21b": TogetherAi81b21b;
  "together-ai-21.1b-41b": TogetherAi211b41b;
  "together-ai-41.1b-80b": TogetherAi411b80b;
  "together-ai-81.1b-110b": TogetherAi811b110b;
  "together-ai-embedding-up-to-150m": TogetherAiEmbeddingUpTo150m;
  "together-ai-embedding-151m-to-350m": TogetherAiEmbedding151mTo350m;
  "together_ai/meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo": TogetherAiMetaLlamaMetaLlama318BInstructTurbo;
  "together_ai/meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo": TogetherAiMetaLlamaMetaLlama3170BInstructTurbo;
  "together_ai/meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo": TogetherAiMetaLlamaMetaLlama31405BInstructTurbo;
  "together_ai/meta-llama/Llama-3.3-70B-Instruct-Turbo": TogetherAiMetaLlamaLlama3370BInstructTurbo;
  "together_ai/meta-llama/Llama-3.3-70B-Instruct-Turbo-Free": TogetherAiMetaLlamaLlama3370BInstructTurboFree;
  "together_ai/mistralai/Mixtral-8x7B-Instruct-v0.1": TogetherAiMistralaiMixtral8x7BInstructV01;
  "together_ai/mistralai/Mistral-7B-Instruct-v0.1": TogetherAiMistralaiMistral7BInstructV01;
  "together_ai/togethercomputer/CodeLlama-34b-Instruct": TogetherAiTogethercomputerCodeLlama34bInstruct;
  "together_ai/meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8": TogetherAiMetaLlamaLlama4Maverick17B128EInstructFp8;
  "together_ai/meta-llama/Llama-4-Scout-17B-16E-Instruct": TogetherAiMetaLlamaLlama4Scout17B16EInstruct;
  "together_ai/meta-llama/Llama-3.2-3B-Instruct-Turbo": TogetherAiMetaLlamaLlama323BInstructTurbo;
  "together_ai/Qwen/Qwen2.5-7B-Instruct-Turbo": TogetherAiQwenQwen257BInstructTurbo;
  "together_ai/Qwen/Qwen2.5-72B-Instruct-Turbo": TogetherAiQwenQwen2572BInstructTurbo;
  "together_ai/deepseek-ai/DeepSeek-V3": TogetherAiDeepseekAiDeepSeekV3;
  "together_ai/deepseek-ai/DeepSeek-R1": TogetherAiDeepseekAiDeepSeekR1;
  "together_ai/mistralai/Mistral-Small-24B-Instruct-2501": TogetherAiMistralaiMistralSmall24BInstruct2501;
  "together_ai/moonshotai/Kimi-K2-Instruct": TogetherAiMoonshotaiKimiK2Instruct;
  "ollama/codegemma": OllamaCodegemma;
  "ollama/codegeex4": OllamaCodegeex4;
  "ollama/deepseek-coder-v2-instruct": OllamaDeepseekCoderV2Instruct;
  "ollama/deepseek-coder-v2-base": OllamaDeepseekCoderV2Base;
  "ollama/deepseek-coder-v2-lite-instruct": OllamaDeepseekCoderV2LiteInstruct;
  "ollama/deepseek-coder-v2-lite-base": OllamaDeepseekCoderV2LiteBase;
  "ollama/internlm2_5-20b-chat": OllamaInternlm2520bChat;
  "ollama/llama2": OllamaLlama2;
  "ollama/llama2:7b": OllamaLlama27b;
  "ollama/llama2:13b": OllamaLlama213b;
  "ollama/llama2:70b": OllamaLlama270b;
  "ollama/llama2-uncensored": OllamaLlama2Uncensored;
  "ollama/llama3": OllamaLlama3;
  "ollama/llama3:8b": OllamaLlama38b;
  "ollama/llama3:70b": OllamaLlama370b;
  "ollama/llama3.1": OllamaLlama31;
  "ollama/mistral-large-instruct-2407": OllamaMistralLargeInstruct2407;
  "ollama/mistral": OllamaMistral;
  "ollama/mistral-7B-Instruct-v0.1": OllamaMistral7BInstructV01;
  "ollama/mistral-7B-Instruct-v0.2": OllamaMistral7BInstructV02;
  "ollama/mixtral-8x7B-Instruct-v0.1": OllamaMixtral8x7BInstructV01;
  "ollama/mixtral-8x22B-Instruct-v0.1": OllamaMixtral8x22BInstructV01;
  "ollama/codellama": OllamaCodellama;
  "ollama/orca-mini": OllamaOrcaMini;
  "ollama/vicuna": OllamaVicuna;
  "deepinfra/lizpreciatior/lzlv_70b_fp16_hf": DeepinfraLizpreciatiorLzlv70bFp16Hf;
  "deepinfra/Gryphe/MythoMax-L2-13b": DeepinfraGrypheMythoMaxL213b;
  "deepinfra/mistralai/Mistral-7B-Instruct-v0.1": DeepinfraMistralaiMistral7BInstructV01;
  "deepinfra/meta-llama/Llama-2-70b-chat-hf": DeepinfraMetaLlamaLlama270bChatHf;
  "deepinfra/cognitivecomputations/dolphin-2.6-mixtral-8x7b": DeepinfraCognitivecomputationsDolphin26Mixtral8x7b;
  "deepinfra/codellama/CodeLlama-34b-Instruct-hf": DeepinfraCodellamaCodeLlama34bInstructHf;
  "deepinfra/deepinfra/mixtral": DeepinfraDeepinfraMixtral;
  "deepinfra/Phind/Phind-CodeLlama-34B-v2": DeepinfraPhindPhindCodeLlama34BV2;
  "deepinfra/mistralai/Mixtral-8x7B-Instruct-v0.1": DeepinfraMistralaiMixtral8x7BInstructV01;
  "deepinfra/deepinfra/airoboros-70b": DeepinfraDeepinfraAiroboros70b;
  "deepinfra/01-ai/Yi-34B-Chat": Deepinfra01AiYi34BChat;
  "deepinfra/01-ai/Yi-6B-200K": Deepinfra01AiYi6B200K;
  "deepinfra/jondurbin/airoboros-l2-70b-gpt4-1.4.1": DeepinfraJondurbinAiroborosL270bGpt4141;
  "deepinfra/meta-llama/Llama-2-13b-chat-hf": DeepinfraMetaLlamaLlama213bChatHf;
  "deepinfra/amazon/MistralLite": DeepinfraAmazonMistralLite;
  "deepinfra/meta-llama/Llama-2-7b-chat-hf": DeepinfraMetaLlamaLlama27bChatHf;
  "deepinfra/meta-llama/Meta-Llama-3-8B-Instruct": DeepinfraMetaLlamaMetaLlama38BInstruct;
  "deepinfra/meta-llama/Meta-Llama-3-70B-Instruct": DeepinfraMetaLlamaMetaLlama370BInstruct;
  "deepinfra/meta-llama/Meta-Llama-3.1-405B-Instruct": DeepinfraMetaLlamaMetaLlama31405BInstruct;
  "deepinfra/01-ai/Yi-34B-200K": Deepinfra01AiYi34B200K;
  "deepinfra/openchat/openchat_3.5": DeepinfraOpenchatOpenchat35;
  "perplexity/codellama-34b-instruct": PerplexityCodellama34bInstruct;
  "perplexity/codellama-70b-instruct": PerplexityCodellama70bInstruct;
  "perplexity/llama-3.1-70b-instruct": PerplexityLlama3170bInstruct;
  "perplexity/llama-3.1-8b-instruct": PerplexityLlama318bInstruct;
  "perplexity/llama-3.1-sonar-huge-128k-online": PerplexityLlama31SonarHuge128kOnline;
  "perplexity/llama-3.1-sonar-large-128k-online": PerplexityLlama31SonarLarge128kOnline;
  "perplexity/llama-3.1-sonar-large-128k-chat": PerplexityLlama31SonarLarge128kChat;
  "perplexity/llama-3.1-sonar-small-128k-chat": PerplexityLlama31SonarSmall128kChat;
  "perplexity/llama-3.1-sonar-small-128k-online": PerplexityLlama31SonarSmall128kOnline;
  "perplexity/pplx-7b-chat": PerplexityPplx7bChat;
  "perplexity/pplx-70b-chat": PerplexityPplx70bChat;
  "perplexity/pplx-7b-online": PerplexityPplx7bOnline;
  "perplexity/pplx-70b-online": PerplexityPplx70bOnline;
  "perplexity/llama-2-70b-chat": PerplexityLlama270bChat;
  "perplexity/mistral-7b-instruct": PerplexityMistral7bInstruct;
  "perplexity/mixtral-8x7b-instruct": PerplexityMixtral8x7bInstruct;
  "perplexity/sonar-small-chat": PerplexitySonarSmallChat;
  "perplexity/sonar-small-online": PerplexitySonarSmallOnline;
  "perplexity/sonar-medium-chat": PerplexitySonarMediumChat;
  "perplexity/sonar-medium-online": PerplexitySonarMediumOnline;
  "perplexity/sonar": PerplexitySonar;
  "perplexity/sonar-pro": PerplexitySonarPro;
  "perplexity/sonar-reasoning": PerplexitySonarReasoning;
  "perplexity/sonar-reasoning-pro": PerplexitySonarReasoningPro;
  "perplexity/sonar-deep-research": PerplexitySonarDeepResearch;
  "fireworks_ai/accounts/fireworks/models/llama-v3p2-1b-instruct": FireworksAiAccountsFireworksModelsLlamaV3p21bInstruct;
  "fireworks_ai/accounts/fireworks/models/llama-v3p2-3b-instruct": FireworksAiAccountsFireworksModelsLlamaV3p23bInstruct;
  "fireworks_ai/accounts/fireworks/models/llama-v3p1-8b-instruct": FireworksAiAccountsFireworksModelsLlamaV3p18bInstruct;
  "fireworks_ai/accounts/fireworks/models/llama-v3p2-11b-vision-instruct": FireworksAiAccountsFireworksModelsLlamaV3p211bVisionInstruct;
  "fireworks_ai/accounts/fireworks/models/llama-v3p2-90b-vision-instruct": FireworksAiAccountsFireworksModelsLlamaV3p290bVisionInstruct;
  "fireworks_ai/accounts/fireworks/models/firefunction-v2": FireworksAiAccountsFireworksModelsFirefunctionV2;
  "fireworks_ai/accounts/fireworks/models/mixtral-8x22b-instruct-hf": FireworksAiAccountsFireworksModelsMixtral8x22bInstructHf;
  "fireworks_ai/accounts/fireworks/models/qwen2-72b-instruct": FireworksAiAccountsFireworksModelsQwen272bInstruct;
  "fireworks_ai/accounts/fireworks/models/qwen2p5-coder-32b-instruct": FireworksAiAccountsFireworksModelsQwen2p5Coder32bInstruct;
  "fireworks_ai/accounts/fireworks/models/yi-large": FireworksAiAccountsFireworksModelsYiLarge;
  "fireworks_ai/accounts/fireworks/models/deepseek-coder-v2-instruct": FireworksAiAccountsFireworksModelsDeepseekCoderV2Instruct;
  "fireworks_ai/accounts/fireworks/models/deepseek-v3": FireworksAiAccountsFireworksModelsDeepseekV3;
  "fireworks_ai/accounts/fireworks/models/deepseek-r1": FireworksAiAccountsFireworksModelsDeepseekR1;
  "fireworks_ai/accounts/fireworks/models/deepseek-r1-basic": FireworksAiAccountsFireworksModelsDeepseekR1Basic;
  "fireworks_ai/accounts/fireworks/models/deepseek-r1-0528": FireworksAiAccountsFireworksModelsDeepseekR10528;
  "fireworks_ai/accounts/fireworks/models/llama-v3p1-405b-instruct": FireworksAiAccountsFireworksModelsLlamaV3p1405bInstruct;
  "fireworks_ai/accounts/fireworks/models/llama4-maverick-instruct-basic": FireworksAiAccountsFireworksModelsLlama4MaverickInstructBasic;
  "fireworks_ai/accounts/fireworks/models/llama4-scout-instruct-basic": FireworksAiAccountsFireworksModelsLlama4ScoutInstructBasic;
  "fireworks_ai/nomic-ai/nomic-embed-text-v1.5": FireworksAiNomicAiNomicEmbedTextV15;
  "fireworks_ai/nomic-ai/nomic-embed-text-v1": FireworksAiNomicAiNomicEmbedTextV1;
  "fireworks_ai/WhereIsAI/UAE-Large-V1": FireworksAiWhereIsAiUaeLargeV1;
  "fireworks_ai/thenlper/gte-large": FireworksAiThenlperGteLarge;
  "fireworks_ai/thenlper/gte-base": FireworksAiThenlperGteBase;
  "fireworks-ai-up-to-4b": FireworksAiUpTo4b;
  "fireworks-ai-4.1b-to-16b": FireworksAi41bTo16b;
  "fireworks-ai-above-16b": FireworksAiAbove16b;
  "fireworks-ai-moe-up-to-56b": FireworksAiMoeUpTo56b;
  "fireworks-ai-56b-to-176b": FireworksAi56bTo176b;
  "fireworks-ai-default": FireworksAiDefault;
  "fireworks-ai-embedding-up-to-150m": FireworksAiEmbeddingUpTo150m;
  "fireworks-ai-embedding-150m-to-350m": FireworksAiEmbedding150mTo350m;
  "anyscale/mistralai/Mistral-7B-Instruct-v0.1": AnyscaleMistralaiMistral7BInstructV01;
  "anyscale/mistralai/Mixtral-8x7B-Instruct-v0.1": AnyscaleMistralaiMixtral8x7BInstructV01;
  "anyscale/mistralai/Mixtral-8x22B-Instruct-v0.1": AnyscaleMistralaiMixtral8x22BInstructV01;
  "anyscale/HuggingFaceH4/zephyr-7b-beta": AnyscaleHuggingFaceH4Zephyr7bBeta;
  "anyscale/google/gemma-7b-it": AnyscaleGoogleGemma7bIt;
  "anyscale/meta-llama/Llama-2-7b-chat-hf": AnyscaleMetaLlamaLlama27bChatHf;
  "anyscale/meta-llama/Llama-2-13b-chat-hf": AnyscaleMetaLlamaLlama213bChatHf;
  "anyscale/meta-llama/Llama-2-70b-chat-hf": AnyscaleMetaLlamaLlama270bChatHf;
  "anyscale/codellama/CodeLlama-34b-Instruct-hf": AnyscaleCodellamaCodeLlama34bInstructHf;
  "anyscale/codellama/CodeLlama-70b-Instruct-hf": AnyscaleCodellamaCodeLlama70bInstructHf;
  "anyscale/meta-llama/Meta-Llama-3-8B-Instruct": AnyscaleMetaLlamaMetaLlama38BInstruct;
  "anyscale/meta-llama/Meta-Llama-3-70B-Instruct": AnyscaleMetaLlamaMetaLlama370BInstruct;
  "cloudflare/@cf/meta/llama-2-7b-chat-fp16": CloudflareCfMetaLlama27bChatFp16;
  "cloudflare/@cf/meta/llama-2-7b-chat-int8": CloudflareCfMetaLlama27bChatInt8;
  "cloudflare/@cf/mistral/mistral-7b-instruct-v0.1": CloudflareCfMistralMistral7bInstructV01;
  "cloudflare/@hf/thebloke/codellama-7b-instruct-awq": CloudflareHfTheblokeCodellama7bInstructAwq;
  "v0/v0-1.0-md": V0V010Md;
  "v0/v0-1.5-md": V0V015Md;
  "v0/v0-1.5-lg": V0V015Lg;
  "voyage/voyage-01": VoyageVoyage01;
  "voyage/voyage-lite-01": VoyageVoyageLite01;
  "voyage/voyage-large-2": VoyageVoyageLarge2;
  "voyage/voyage-finance-2": VoyageVoyageFinance2;
  "voyage/voyage-lite-02-instruct": VoyageVoyageLite02Instruct;
  "voyage/voyage-law-2": VoyageVoyageLaw2;
  "voyage/voyage-code-2": VoyageVoyageCode2;
  "voyage/voyage-2": VoyageVoyage2;
  "voyage/voyage-3-large": VoyageVoyage3Large;
  "voyage/voyage-3": VoyageVoyage3;
  "voyage/voyage-3-lite": VoyageVoyage3Lite;
  "voyage/voyage-code-3": VoyageVoyageCode3;
  "voyage/voyage-multimodal-3": VoyageVoyageMultimodal3;
  "voyage/rerank-2": VoyageRerank2;
  "voyage/rerank-2-lite": VoyageRerank2Lite;
  "databricks/databricks-claude-3-7-sonnet": DatabricksDatabricksClaude37Sonnet;
  "databricks/databricks-meta-llama-3-1-405b-instruct": DatabricksDatabricksMetaLlama31405bInstruct;
  "databricks/databricks-meta-llama-3-1-70b-instruct": DatabricksDatabricksMetaLlama3170bInstruct;
  "databricks/databricks-meta-llama-3-3-70b-instruct": DatabricksDatabricksMetaLlama3370bInstruct;
  "databricks/databricks-llama-4-maverick": DatabricksDatabricksLlama4Maverick;
  "databricks/databricks-dbrx-instruct": DatabricksDatabricksDbrxInstruct;
  "databricks/databricks-meta-llama-3-70b-instruct": DatabricksDatabricksMetaLlama370bInstruct;
  "databricks/databricks-llama-2-70b-chat": DatabricksDatabricksLlama270bChat;
  "databricks/databricks-mixtral-8x7b-instruct": DatabricksDatabricksMixtral8x7bInstruct;
  "databricks/databricks-mpt-30b-instruct": DatabricksDatabricksMpt30bInstruct;
  "databricks/databricks-mpt-7b-instruct": DatabricksDatabricksMpt7bInstruct;
  "databricks/databricks-bge-large-en": DatabricksDatabricksBgeLargeEn;
  "databricks/databricks-gte-large-en": DatabricksDatabricksGteLargeEn;
  "sambanova/Meta-Llama-3.1-8B-Instruct": SambanovaMetaLlama318BInstruct;
  "sambanova/Meta-Llama-3.1-405B-Instruct": SambanovaMetaLlama31405BInstruct;
  "sambanova/Meta-Llama-3.2-1B-Instruct": SambanovaMetaLlama321BInstruct;
  "sambanova/Meta-Llama-3.2-3B-Instruct": SambanovaMetaLlama323BInstruct;
  "sambanova/Llama-4-Maverick-17B-128E-Instruct": SambanovaLlama4Maverick17B128EInstruct;
  "sambanova/Llama-4-Scout-17B-16E-Instruct": SambanovaLlama4Scout17B16EInstruct;
  "sambanova/Meta-Llama-3.3-70B-Instruct": SambanovaMetaLlama3370BInstruct;
  "sambanova/Meta-Llama-Guard-3-8B": SambanovaMetaLlamaGuard38B;
  "sambanova/Qwen3-32B": SambanovaQwen332B;
  "sambanova/QwQ-32B": SambanovaQwQ32B;
  "sambanova/Qwen2-Audio-7B-Instruct": SambanovaQwen2Audio7BInstruct;
  "sambanova/DeepSeek-R1-Distill-Llama-70B": SambanovaDeepSeekR1DistillLlama70B;
  "sambanova/DeepSeek-R1": SambanovaDeepSeekR1;
  "sambanova/DeepSeek-V3-0324": SambanovaDeepSeekV30324;
  "assemblyai/nano": AssemblyaiNano;
  "assemblyai/best": AssemblyaiBest;
  "jina-reranker-v2-base-multilingual": JinaRerankerV2BaseMultilingual;
  "snowflake/deepseek-r1": SnowflakeDeepseekR1;
  "snowflake/snowflake-arctic": SnowflakeSnowflakeArctic;
  "snowflake/claude-3-5-sonnet": SnowflakeClaude35Sonnet;
  "snowflake/mistral-large": SnowflakeMistralLarge;
  "snowflake/mistral-large2": SnowflakeMistralLarge2;
  "snowflake/reka-flash": SnowflakeRekaFlash;
  "snowflake/reka-core": SnowflakeRekaCore;
  "snowflake/jamba-instruct": SnowflakeJambaInstruct;
  "snowflake/jamba-1.5-mini": SnowflakeJamba15Mini;
  "snowflake/jamba-1.5-large": SnowflakeJamba15Large;
  "snowflake/mixtral-8x7b": SnowflakeMixtral8x7b;
  "snowflake/llama2-70b-chat": SnowflakeLlama270bChat;
  "snowflake/llama3-8b": SnowflakeLlama38b;
  "snowflake/llama3-70b": SnowflakeLlama370b;
  "snowflake/llama3.1-8b": SnowflakeLlama318b;
  "snowflake/llama3.1-70b": SnowflakeLlama3170b;
  "snowflake/llama3.3-70b": SnowflakeLlama3370b;
  "snowflake/snowflake-llama-3.3-70b": SnowflakeSnowflakeLlama3370b;
  "snowflake/llama3.1-405b": SnowflakeLlama31405b;
  "snowflake/snowflake-llama-3.1-405b": SnowflakeSnowflakeLlama31405b;
  "snowflake/llama3.2-1b": SnowflakeLlama321b;
  "snowflake/llama3.2-3b": SnowflakeLlama323b;
  "snowflake/mistral-7b": SnowflakeMistral7b;
  "snowflake/gemma-7b": SnowflakeGemma7b;
  "nscale/meta-llama/Llama-4-Scout-17B-16E-Instruct": NscaleMetaLlamaLlama4Scout17B16EInstruct;
  "nscale/Qwen/Qwen2.5-Coder-3B-Instruct": NscaleQwenQwen25Coder3BInstruct;
  "nscale/Qwen/Qwen2.5-Coder-7B-Instruct": NscaleQwenQwen25Coder7BInstruct;
  "nscale/Qwen/Qwen2.5-Coder-32B-Instruct": NscaleQwenQwen25Coder32BInstruct;
  "nscale/Qwen/QwQ-32B": NscaleQwenQwQ32B;
  "nscale/deepseek-ai/DeepSeek-R1-Distill-Llama-70B": NscaleDeepseekAiDeepSeekR1DistillLlama70B;
  "nscale/deepseek-ai/DeepSeek-R1-Distill-Llama-8B": NscaleDeepseekAiDeepSeekR1DistillLlama8B;
  "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B": NscaleDeepseekAiDeepSeekR1DistillQwen15B;
  "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B": NscaleDeepseekAiDeepSeekR1DistillQwen7B;
  "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B": NscaleDeepseekAiDeepSeekR1DistillQwen14B;
  "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B": NscaleDeepseekAiDeepSeekR1DistillQwen32B;
  "nscale/mistralai/mixtral-8x22b-instruct-v0.1": NscaleMistralaiMixtral8x22bInstructV01;
  "nscale/meta-llama/Llama-3.1-8B-Instruct": NscaleMetaLlamaLlama318BInstruct;
  "nscale/meta-llama/Llama-3.3-70B-Instruct": NscaleMetaLlamaLlama3370BInstruct;
  "nscale/black-forest-labs/FLUX.1-schnell": NscaleBlackForestLabsFlux1Schnell;
  "nscale/stabilityai/stable-diffusion-xl-base-1.0": NscaleStabilityaiStableDiffusionXlBase10;
  "featherless_ai/featherless-ai/Qwerky-72B": FeatherlessAiFeatherlessAiQwerky72B;
  "featherless_ai/featherless-ai/Qwerky-QwQ-32B": FeatherlessAiFeatherlessAiQwerkyQwQ32B;
  "deepgram/nova-3": DeepgramNova3;
  "deepgram/nova-3-general": DeepgramNova3General;
  "deepgram/nova-3-medical": DeepgramNova3Medical;
  "deepgram/nova-2": DeepgramNova2;
  "deepgram/nova-2-general": DeepgramNova2General;
  "deepgram/nova-2-meeting": DeepgramNova2Meeting;
  "deepgram/nova-2-phonecall": DeepgramNova2Phonecall;
  "deepgram/nova-2-voicemail": DeepgramNova2Voicemail;
  "deepgram/nova-2-finance": DeepgramNova2Finance;
  "deepgram/nova-2-conversationalai": DeepgramNova2Conversationalai;
  "deepgram/nova-2-video": DeepgramNova2Video;
  "deepgram/nova-2-drivethru": DeepgramNova2Drivethru;
  "deepgram/nova-2-automotive": DeepgramNova2Automotive;
  "deepgram/nova-2-atc": DeepgramNova2Atc;
  "deepgram/nova": DeepgramNova;
  "deepgram/nova-general": DeepgramNovaGeneral;
  "deepgram/nova-phonecall": DeepgramNovaPhonecall;
  "deepgram/enhanced": DeepgramEnhanced;
  "deepgram/enhanced-general": DeepgramEnhancedGeneral;
  "deepgram/enhanced-meeting": DeepgramEnhancedMeeting;
  "deepgram/enhanced-phonecall": DeepgramEnhancedPhonecall;
  "deepgram/enhanced-finance": DeepgramEnhancedFinance;
  "deepgram/base": DeepgramBase;
  "deepgram/base-general": DeepgramBaseGeneral;
  "deepgram/base-meeting": DeepgramBaseMeeting;
  "deepgram/base-phonecall": DeepgramBasePhonecall;
  "deepgram/base-voicemail": DeepgramBaseVoicemail;
  "deepgram/base-finance": DeepgramBaseFinance;
  "deepgram/base-conversationalai": DeepgramBaseConversationalai;
  "deepgram/base-video": DeepgramBaseVideo;
  "deepgram/whisper": DeepgramWhisper;
  "deepgram/whisper-tiny": DeepgramWhisperTiny;
  "deepgram/whisper-base": DeepgramWhisperBase;
  "deepgram/whisper-small": DeepgramWhisperSmall;
  "deepgram/whisper-medium": DeepgramWhisperMedium;
  "deepgram/whisper-large": DeepgramWhisperLarge;
  "elevenlabs/scribe_v1": ElevenlabsScribeV1;
  "elevenlabs/scribe_v1_experimental": ElevenlabsScribeV1Experimental;
  "dashscope/qwen-max": DashscopeQwenMax;
  "dashscope/qwen-plus-latest": DashscopeQwenPlusLatest;
  "dashscope/qwen-turbo-latest": DashscopeQwenTurboLatest;
  "dashscope/qwen3-30b-a3b": DashscopeQwen330bA3b;
  "moonshot/moonshot-v1-8k": MoonshotMoonshotV18k;
  "moonshot/moonshot-v1-32k": MoonshotMoonshotV132k;
  "moonshot/moonshot-v1-128k": MoonshotMoonshotV1128k;
  "moonshot/moonshot-v1-auto": MoonshotMoonshotV1Auto;
  "moonshot/kimi-k2-0711-preview": MoonshotKimiK20711Preview;
  "moonshot/moonshot-v1-32k-0430": MoonshotMoonshotV132k0430;
  "moonshot/moonshot-v1-128k-0430": MoonshotMoonshotV1128k0430;
  "moonshot/moonshot-v1-8k-0430": MoonshotMoonshotV18k0430;
}

export interface SampleSpec {
  max_tokens: string;
  max_input_tokens: string;
  max_output_tokens: string;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_system_messages: boolean;
  supports_reasoning: boolean;
  supports_web_search: boolean;
  search_context_cost_per_query: SearchContextCostPerQuery;
  file_search_cost_per_1k_calls: number;
  file_search_cost_per_gb_per_day: number;
  vector_store_cost_per_gb_per_day: number;
  computer_use_input_cost_per_1k_tokens: number;
  computer_use_output_cost_per_1k_tokens: number;
  code_interpreter_cost_per_session: number;
  supported_regions: string[];
  deprecation_date: string;
}

export interface SearchContextCostPerQuery {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface OmniModerationLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OmniModerationLatestIntents {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OmniModeration20240926 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Gpt4 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt41 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface Gpt4120250414 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface Gpt41Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface Gpt41Mini20250414 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface Gpt41Nano {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface Gpt41Nano20250414 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface Gpt4o {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface WatsonxIbmGranite38bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_system_messages: boolean;
}

export interface WatsonxMistralaiMistralLarge {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_system_messages: boolean;
}

export interface Gpt4oSearchPreview20250311 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oSearchPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
  search_context_cost_per_query: SearchContextCostPerQuery2;
}

export interface SearchContextCostPerQuery2 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface Gpt45Preview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt45Preview20250227 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface Gpt4oAudioPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oAudioPreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oAudioPreview20241001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oAudioPreview20250603 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oMiniAudioPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oMiniAudioPreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oMini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oMiniSearchPreview20250311 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oMiniSearchPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
  search_context_cost_per_query: SearchContextCostPerQuery3;
}

export interface SearchContextCostPerQuery3 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface Gpt4oMini20240718 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  search_context_cost_per_query: SearchContextCostPerQuery4;
}

export interface SearchContextCostPerQuery4 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface CodexMiniLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supported_endpoints: string[];
}

export interface O1Pro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
  supports_reasoning: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supported_endpoints: string[];
}

export interface O1Pro20250319 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
  supports_reasoning: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supported_endpoints: string[];
}

export interface O1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface O1Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
}

export interface ComputerUsePreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
}

export interface O3DeepResearch {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface O3DeepResearch20250626 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface O3Pro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface O3Pro20250610 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface O3 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface O320250416 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface O3Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface O3Mini20250131 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface O4Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface O4MiniDeepResearch {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface O4MiniDeepResearch20250626 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface O4Mini20250416 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface O1Mini20240912 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
}

export interface O1Preview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
}

export interface O1Preview20240912 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
}

export interface O120241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface Chatgpt4oLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4o20240513 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4o20240806 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4o20241120 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oRealtimePreview20241001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_creation_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oRealtimePreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oRealtimePreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oMiniRealtimePreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_creation_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4oMiniRealtimePreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_creation_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4TurboPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt40314 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt40613 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface Gpt432k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt432k0314 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt432k0613 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4Turbo {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4Turbo20240409 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt41106Preview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt40125Preview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt4VisionPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface Gpt41106VisionPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface Gpt35Turbo {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt35Turbo0301 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt35Turbo0613 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt35Turbo1106 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt35Turbo0125 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt35Turbo16k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface Gpt35Turbo16k0613 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface FtGpt35Turbo {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface FtGpt35Turbo0125 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface FtGpt35Turbo1106 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface FtGpt35Turbo0613 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface FtGpt40613 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface FtGpt4o20240806 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface FtGpt4o20241120 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  cache_creation_input_token_cost: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface FtGpt4oMini20240718 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface FtDavinci002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
}

export interface FtBabbage002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
}

export interface TextEmbedding3Large {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
}

export interface TextEmbedding3Small {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
}

export interface TextEmbeddingAda002 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TextEmbeddingAda002V2 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
}

export interface TextModerationStable {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TextModeration007 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TextModerationLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface N256X256DallE2 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
}

export interface N512X512DallE2 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
}

export interface N1024X1024DallE2 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
}

export interface Hd1024X1792DallE3 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
}

export interface Hd1792X1024DallE3 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
}

export interface Hd1024X1024DallE3 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
}

export interface Standard1024X1792DallE3 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
}

export interface Standard1792X1024DallE3 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
}

export interface Standard1024X1024DallE3 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
}

export interface GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Low1024X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Medium1024X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface High1024X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Low1024X1536GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Medium1024X1536GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface High1024X1536GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Low1536X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Medium1536X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface High1536X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Gpt4oTranscribe {
  mode: string;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Gpt4oMiniTranscribe {
  mode: string;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Whisper1 {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Tts1 {
  mode: string;
  input_cost_per_character: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Tts1Hd {
  mode: string;
  input_cost_per_character: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface Gpt4oMiniTts {
  mode: string;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supported_endpoints: string[];
}

export interface AzureGpt4oMiniTts {
  mode: string;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supported_endpoints: string[];
}

export interface AzureComputerUsePreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
}

export interface AzureGpt4oAudioPreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
  supports_reasoning: boolean;
}

export interface AzureGpt4oMiniAudioPreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
  supports_reasoning: boolean;
}

export interface AzureGpt41 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
  supports_web_search: boolean;
  search_context_cost_per_query: SearchContextCostPerQuery5;
}

export interface SearchContextCostPerQuery5 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface AzureGpt4120250414 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
  supports_web_search: boolean;
  search_context_cost_per_query: SearchContextCostPerQuery6;
}

export interface SearchContextCostPerQuery6 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface AzureGpt41Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
  supports_web_search: boolean;
  search_context_cost_per_query: SearchContextCostPerQuery7;
}

export interface SearchContextCostPerQuery7 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface AzureGpt41Mini20250414 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
  supports_web_search: boolean;
  search_context_cost_per_query: SearchContextCostPerQuery8;
}

export interface SearchContextCostPerQuery8 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface AzureGpt41Nano {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface AzureGpt41Nano20250414 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_native_streaming: boolean;
}

export interface AzureO3Pro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface AzureO3Pro20250610 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface AzureO3 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface AzureO320250416 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface AzureO3DeepResearch {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_web_search: boolean;
}

export interface AzureO4Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4oMiniRealtimePreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_creation_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface AzureEuGpt4oMiniRealtimePreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_creation_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface AzureUsGpt4oMiniRealtimePreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_creation_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4oRealtimePreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface AzureUsGpt4oRealtimePreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_read_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface AzureEuGpt4oRealtimePreview20241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_read_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4oRealtimePreview20241001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_creation_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface AzureUsGpt4oRealtimePreview20241001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_creation_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface AzureEuGpt4oRealtimePreview20241001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  cache_read_input_token_cost: number;
  cache_creation_input_audio_token_cost: number;
  output_cost_per_token: number;
  output_cost_per_audio_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_audio_input: boolean;
  supports_audio_output: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface AzureO4Mini20250416 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface AzureO3Mini20250131 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureUsO3Mini20250131 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureEuO3Mini20250131 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureTts1 {
  mode: string;
  input_cost_per_character: number;
  litellm_provider: string;
}

export interface AzureTts1Hd {
  mode: string;
  input_cost_per_character: number;
  litellm_provider: string;
}

export interface AzureWhisper1 {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
}

export interface AzureGpt4oTranscribe {
  mode: string;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureGpt4oMiniTranscribe {
  mode: string;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureO3Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface AzureO1Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
}

export interface AzureO1Mini20240912 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
}

export interface AzureUsO1Mini20240912 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
}

export interface AzureEuO1Mini20240912 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
}

export interface AzureO1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureO120241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureUsO120241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureEuO120241217 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureCodexMini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supported_endpoints: string[];
}

export interface AzureO1Preview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
}

export interface AzureO1Preview20240912 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
}

export interface AzureUsO1Preview20240912 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
}

export interface AzureEuO1Preview20240912 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
}

export interface AzureGpt45Preview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token_batches: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4o {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGlobalGpt4o20241120 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4o20240806 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGlobalGpt4o20240806 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4o20241120 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureUsGpt4o20241120 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  cache_creation_input_token_cost: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface AzureEuGpt4o20241120 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  cache_creation_input_token_cost: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4o20240513 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGlobalStandardGpt4o20240806 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface AzureUsGpt4o20240806 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureEuGpt4o20240806 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGlobalStandardGpt4o20241120 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface AzureGlobalStandardGpt4oMini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4oMini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4oMini20240718 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureUsGpt4oMini20240718 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureEuGpt4oMini20240718 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4Turbo20240409 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt40125Preview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt41106Preview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt40613 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt432k0613 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface AzureGpt432k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface AzureGpt4 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4Turbo {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt4TurboVisionPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt35Turbo16k0613 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt35Turbo1106 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface AzureGpt35Turbo0613 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface AzureGpt35Turbo0301 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface AzureGpt35Turbo0125 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface AzureGpt35Turbo01252 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface AzureGpt35Turbo16k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface AzureGpt35Turbo {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt35Turbo2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface AzureGpt35TurboInstruct0914 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureGpt35TurboInstruct {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureGpt35TurboInstruct09142 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureMistralLargeLatest {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface AzureMistralLarge2402 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface AzureCommandRPlus {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface AzureAda {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureTextEmbeddingAda002 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureTextEmbedding3Large {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureTextEmbedding3Small {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureGptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureLow1024X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureMedium1024X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureHigh1024X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureLow1024X1536GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureMedium1024X1536GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureHigh1024X1536GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureLow1536X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureMedium1536X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureHigh1536X1024GptImage1 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
}

export interface AzureStandard1024X1024DallE3 {
  input_cost_per_pixel: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureHd1024X1024DallE3 {
  input_cost_per_pixel: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureStandard1024X1792DallE3 {
  input_cost_per_pixel: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureStandard1792X1024DallE3 {
  input_cost_per_pixel: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureHd1024X1792DallE3 {
  input_cost_per_pixel: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureHd1792X1024DallE3 {
  input_cost_per_pixel: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureStandard1024X1024DallE2 {
  input_cost_per_pixel: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureAiGrok3 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface AzureAiGlobalGrok3 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface AzureAiGlobalGrok3Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface AzureAiGrok3Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface AzureAiDeepseekR1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  source: string;
}

export interface AzureAiDeepseekV3 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
  source: string;
}

export interface AzureAiDeepseekV30324 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  source: string;
}

export interface AzureAiJambaInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface AzureAiJais30bChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface AzureAiMistralNemo {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
}

export interface AzureAiMistralMedium2505 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface AzureAiMistralLarge {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface AzureAiMistralSmall {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface AzureAiMistralSmall2503 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface AzureAiMistralLarge2407 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiMistralLargeLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiMinistral3b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiLlama3211BVisionInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiLlama3370BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiLlama4Scout17B16EInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiLlama4Maverick17B128EInstructFp8 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiLlama3290BVisionInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiMetaLlama370BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface AzureAiMetaLlama318BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiMetaLlama3170BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiMetaLlama31405BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiPhi4MiniInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
}

export interface AzureAiPhi4MultimodalInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_audio_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_audio_input: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  source: string;
}

export interface AzureAiPhi4 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  source: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface AzureAiPhi35MiniInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiPhi35VisionInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiPhi35MoEInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiPhi3Mini4kInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiPhi3Mini128kInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiPhi3Small8kInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiPhi3Small128kInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiPhi3Medium4kInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiPhi3Medium128kInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface AzureAiCohereRerankV35 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureAiCohereRerankV3Multilingual {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureAiCohereRerankV3English {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AzureAiCohereEmbedV3English {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_embedding_image_input: boolean;
  source: string;
}

export interface AzureAiCohereEmbedV3Multilingual {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_embedding_image_input: boolean;
  source: string;
}

export interface AzureAiEmbedV40 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_embedding_image_input: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  source: string;
}

export interface Babbage002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Davinci002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Gpt35TurboInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Gpt35TurboInstruct0914 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface MistralMistralTiny {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralSmall {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  mode: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralSmallLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  mode: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralMedium {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralMediumLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralMedium2505 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralMedium2312 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralLargeLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralLarge2411 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralLarge2402 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralLarge2407 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralPixtralLargeLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralPixtralLarge2411 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralPixtral12b2409 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralOpenMistral7b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralOpenMixtral8x7b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralOpenMixtral8x22b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralCodestralLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralCodestral2405 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralOpenMistralNemo {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralOpenMistralNemo2407 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralOpenCodestralMamba {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface MistralCodestralMambaLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface MistralDevstralSmall2505 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralDevstralSmall2507 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralDevstralMedium2507 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface MistralMagistralMediumLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
}

export interface MistralMagistralMedium2506 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
}

export interface MistralMagistralSmallLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
}

export interface MistralMagistralSmall2506 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
}

export interface MistralMistralEmbed {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface DeepseekDeepseekReasoner {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_cache_hit: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
}

export interface DeepseekDeepseekChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_cache_hit: number;
  cache_read_input_token_cost: number;
  cache_creation_input_token_cost: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_prompt_caching: boolean;
}

export interface DeepseekDeepseekR1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_cache_hit: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_prompt_caching: boolean;
}

export interface DeepseekDeepseekV3 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_cache_hit: number;
  cache_read_input_token_cost: number;
  cache_creation_input_token_cost: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_prompt_caching: boolean;
}

export interface CodestralCodestralLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface CodestralCodestral2405 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface TextCompletionCodestralCodestralLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextCompletionCodestralCodestral2405 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface XaiGrokBeta {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface XaiGrok2Vision1212 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_image: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface XaiGrok2VisionLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_image: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface XaiGrok2Vision {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_image: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface XaiGrok3 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok3Latest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok3Beta {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok3FastBeta {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok3FastLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok3Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok3MiniLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok3MiniFast {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok3MiniFastLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok3MiniBeta {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok3MiniFastBeta {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrokVisionBeta {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_image: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface XaiGrok21212 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface XaiGrok2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface XaiGrok2Latest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface XaiGrok4 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok40709 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface XaiGrok4Latest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  source: string;
  supports_web_search: boolean;
}

export interface DeepseekDeepseekCoder {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_cache_hit: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
  supports_prompt_caching: boolean;
}

export interface GroqDeepseekR1DistillLlama70b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface GroqLlama3370bVersatile {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface GroqLlama3370bSpecdec {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqLlamaGuard38b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface GroqLlama270b4096 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface GroqLlama38b8192 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface GroqLlama321bPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqLlama323bPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqLlama3211bTextPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqLlama3211bVisionPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqLlama3290bTextPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqLlama3290bVisionPreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqLlama370b8192 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface GroqLlama318bInstant {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface GroqLlama3170bVersatile {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqLlama31405bReasoning {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface GroqMetaLlamaLlama4Scout17b16eInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface GroqMetaLlamaLlama4Maverick17b128eInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface GroqMistralSaba24b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface GroqMixtral8x7b32768 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqGemma7bIt {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqGemma29bIt {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface GroqLlama3Groq70b8192ToolUsePreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqLlama3Groq8b8192ToolUsePreview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  deprecation_date: string;
}

export interface GroqQwenQwq32b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface GroqMoonshotaiKimiK2Instruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface GroqPlayaiTts {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_character: number;
  litellm_provider: string;
  mode: string;
}

export interface GroqWhisperLargeV3 {
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface GroqWhisperLargeV3Turbo {
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface GroqDistilWhisperLargeV3En {
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface CerebrasLlama318b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface CerebrasLlama3170b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface CerebrasLlama3370b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface CerebrasQwen332b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  source: string;
}

export interface FriendliaiMetaLlama318bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_system_messages: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface FriendliaiMetaLlama3170bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_system_messages: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface Claude2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Claude21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Claude3Haiku20240307 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface Claude35Haiku20241022 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  search_context_cost_per_query: SearchContextCostPerQuery9;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface SearchContextCostPerQuery9 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface Claude35HaikuLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  search_context_cost_per_query: SearchContextCostPerQuery10;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface SearchContextCostPerQuery10 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface Claude3OpusLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface Claude3Opus20240229 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface Claude3Sonnet20240229 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface Claude35SonnetLatest {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  search_context_cost_per_query: SearchContextCostPerQuery11;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface SearchContextCostPerQuery11 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface Claude35Sonnet20240620 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface ClaudeOpus420250514 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery12;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery12 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface ClaudeSonnet420250514 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery13;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery13 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface Claude4Opus20250514 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery14;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery14 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface Claude4Sonnet20250514 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery15;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery15 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface Claude37SonnetLatest {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery16;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
}

export interface SearchContextCostPerQuery16 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface Claude37Sonnet20250219 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  search_context_cost_per_query: SearchContextCostPerQuery17;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_web_search: boolean;
}

export interface SearchContextCostPerQuery17 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface Claude35Sonnet20241022 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  search_context_cost_per_query: SearchContextCostPerQuery18;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
}

export interface SearchContextCostPerQuery18 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface TextBison {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextBison001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextBison002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextBison32k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextBison32k002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextUnicorn {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextUnicorn001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface ChatBison {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface ChatBison001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface ChatBison002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface ChatBison32k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface ChatBison32k002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface CodeBison {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface CodeBison001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface CodeBison002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface CodeBison32k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface CodeBison32k002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface CodeGecko001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface CodeGecko002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface CodeGecko {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface CodeGeckoLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface CodechatBisonLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface CodechatBison {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface CodechatBison001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface CodechatBison002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface CodechatBison32k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface CodechatBison32k002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface MetaLlamaLlama4Scout17B16EInstructFp8 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface MetaLlamaLlama4Maverick17B128EInstructFp8 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface MetaLlamaLlama3370BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface MetaLlamaLlama338BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface GeminiPro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface Gemini10Pro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface Gemini10Pro001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface Gemini10Ultra {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface Gemini10Ultra001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface Gemini10Pro002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15Pro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15Pro002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  deprecation_date: string;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15Pro001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_vision: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  deprecation_date: string;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15ProPreview0514 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15ProPreview0215 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15ProPreview0409 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_video_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15Flash {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15FlashExp0827 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15Flash002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  source: string;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15Flash001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  source: string;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface Gemini15FlashPreview0514 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface GeminiProExperimental {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  source: string;
  supports_parallel_function_calling: boolean;
}

export interface GeminiFlashExperimental {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  source: string;
  supports_parallel_function_calling: boolean;
}

export interface GeminiProVision {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface Gemini10ProVision {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface Gemini10ProVision001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  source: string;
  deprecation_date: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
}

export interface MedlmMedium {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface MedlmLarge {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_character: number;
  output_cost_per_character: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface Gemini25ProExp0325 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_audio_input: boolean;
  supports_video_input: boolean;
  supports_pdf_input: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini20ProExp0205 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_audio_input: boolean;
  supports_video_input: boolean;
  supports_pdf_input: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini20FlashExp {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini20Flash001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  deprecation_date: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini20FlashThinkingExp {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini20FlashThinkingExp0121 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini25Pro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_audio_input: boolean;
  supports_video_input: boolean;
  supports_pdf_input: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25ProExp0325 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_audio_input: boolean;
  supports_video_input: boolean;
  supports_pdf_input: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25Pro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_audio_input: boolean;
  supports_video_input: boolean;
  supports_pdf_input: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25Flash {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  supports_url_context: boolean;
  tpm: number;
  rpm: number;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini25Flash {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  supports_url_context: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25FlashPreviewTts {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25FlashPreview0520 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  supports_url_context: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25FlashPreview0417 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25FlashLitePreview0617 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_reasoning: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  supports_url_context: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini25FlashPreview0520 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  supports_url_context: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini25FlashPreview0417 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini25FlashLitePreview0617 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  supports_url_context: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini20Flash {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_audio_input: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_tool_choice: boolean;
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  supports_url_context: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini20FlashLite {
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini20FlashLite001 {
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_tool_choice: boolean;
  deprecation_date: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini25ProPreview0605 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini25ProPreview0506 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  supported_regions: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini25ProPreview0325 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_endpoints: string[];
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini20FlashPreviewImageGeneration {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_audio_input: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_tool_choice: boolean;
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface Gemini25ProPreviewTts {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_parallel_function_calling: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini20ProExp0205 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_audio_input: boolean;
  supports_video_input: boolean;
  supports_pdf_input: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  source: string;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini20FlashPreviewImageGeneration {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_audio_input: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_tool_choice: boolean;
  source: string;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini20Flash {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_audio_input: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  supports_tool_choice: boolean;
  source: string;
  supports_web_search: boolean;
  supports_url_context: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini20FlashLite {
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  tpm: number;
  rpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini20Flash001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25ProPreviewTts {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25ProPreview0605 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  supports_url_context: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25ProPreview0506 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  supports_url_context: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini25ProPreview0325 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  input_cost_per_token_above_200k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_200k_tokens: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  supports_pdf_input: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini20FlashExp {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  tpm: number;
  rpm: number;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini20FlashLitePreview0205 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  rpm: number;
  tpm: number;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini20FlashThinkingExp {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  tpm: number;
  rpm: number;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemini20FlashThinkingExp0121 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  tpm: number;
  rpm: number;
  supported_modalities: string[];
  supported_output_modalities: string[];
  source: string;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
  cache_read_input_token_cost: number;
  supports_prompt_caching: boolean;
}

export interface GeminiGemma327bIt {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface GeminiLearnlm15ProExperimental {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_audio_per_second: number;
  input_cost_per_token: number;
  input_cost_per_character: number;
  input_cost_per_token_above_128k_tokens: number;
  input_cost_per_character_above_128k_tokens: number;
  input_cost_per_image_above_128k_tokens: number;
  input_cost_per_video_per_second_above_128k_tokens: number;
  input_cost_per_audio_per_second_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_character: number;
  output_cost_per_token_above_128k_tokens: number;
  output_cost_per_character_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude3Sonnet {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude3Sonnet20240229 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude35Sonnet {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_pdf_input: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude35Sonnet20240620 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_pdf_input: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude35SonnetV2 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_pdf_input: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude35SonnetV220241022 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_pdf_input: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude37Sonnet20250219 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_pdf_input: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  deprecation_date: string;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaudeOpus4 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery19;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery19 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface VertexAiClaudeOpus420250514 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery20;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery20 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface VertexAiClaudeSonnet4 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery21;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery21 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface VertexAiClaudeSonnet420250514 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery22;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery22 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface VertexAiClaude3Haiku {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude3Haiku20240307 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude35Haiku {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_pdf_input: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude35Haiku20241022 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_pdf_input: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude3Opus {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiClaude3Opus20240229 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiMetaLlama3405bInstructMaas {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface VertexAiMetaLlama4Scout17b16eInstructMaas {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
  supports_function_calling: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface VertexAiMetaLlama4Scout17b128eInstructMaas {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
  supports_function_calling: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface VertexAiMetaLlama4Maverick17b128eInstructMaas {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
  supports_function_calling: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface VertexAiMetaLlama4Maverick17b16eInstructMaas {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
  supports_function_calling: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface VertexAiMetaLlama370bInstructMaas {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface VertexAiMetaLlama38bInstructMaas {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
}

export interface VertexAiMetaLlama3290bVisionInstructMaas {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface VertexAiMistralLargeLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiMistralLarge2411001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiMistralLarge2411 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiMistralLarge2407 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiMistralNemoLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiMistralSmall2503001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface VertexAiMistralSmall2503 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiJamba15Mini001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface VertexAiJamba15Large001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface VertexAiJamba15 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface VertexAiJamba15Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface VertexAiJamba15Large {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface VertexAiMistralNemo2407 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiCodestralLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiCodestral2405 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiCodestral2501 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface VertexAiImagegeneration006 {
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface VertexAiImagen40GeneratePreview0606 {
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface VertexAiImagen40UltraGeneratePreview0606 {
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface VertexAiImagen40FastGeneratePreview0606 {
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface VertexAiImagen30Generate002 {
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface VertexAiImagen30Generate001 {
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface VertexAiImagen30FastGenerate001 {
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextEmbedding004 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface GeminiEmbedding001 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextEmbedding005 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextMultilingualEmbedding002 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface Multimodalembedding {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_video_per_second_above_8s_interval: number;
  input_cost_per_video_per_second_above_15s_interval: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  source: string;
}

export interface Multimodalembedding001 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_image: number;
  input_cost_per_video_per_second: number;
  input_cost_per_video_per_second_above_8s_interval: number;
  input_cost_per_video_per_second_above_15s_interval: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supported_endpoints: string[];
  supported_modalities: string[];
  source: string;
}

export interface TextEmbeddingLargeExp0307 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextembeddingGecko {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextembeddingGeckoMultilingual {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextembeddingGeckoMultilingual001 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextembeddingGecko001 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextembeddingGecko003 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_character: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextEmbeddingPreview0409 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  input_cost_per_token_batch_requests: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface TextMultilingualEmbeddingPreview0409 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface PalmChatBison {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface PalmChatBison001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface PalmTextBison {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface PalmTextBison001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface PalmTextBisonSafetyOff {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface PalmTextBisonSafetyRecitationOff {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface GeminiGemini15Flash002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  cache_read_input_token_cost: number;
  cache_creation_input_token_cost: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_prompt_caching: boolean;
  tpm: number;
  rpm: number;
  source: string;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface GeminiGemini15Flash001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  cache_read_input_token_cost: number;
  cache_creation_input_token_cost: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_prompt_caching: boolean;
  tpm: number;
  rpm: number;
  source: string;
  deprecation_date: string;
  supports_tool_choice: boolean;
}

export interface GeminiGemini15Flash {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  tpm: number;
  rpm: number;
  source: string;
  supports_tool_choice: boolean;
}

export interface GeminiGemini15FlashLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_prompt_caching: boolean;
  tpm: number;
  rpm: number;
  source: string;
  supports_tool_choice: boolean;
}

export interface GeminiGemini15Flash8b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_prompt_caching: boolean;
  tpm: number;
  rpm: number;
  source: string;
  supports_tool_choice: boolean;
}

export interface GeminiGemini15Flash8bExp0924 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_prompt_caching: boolean;
  tpm: number;
  rpm: number;
  source: string;
  supports_tool_choice: boolean;
}

export interface GeminiGeminiExp1114 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  tpm: number;
  rpm: number;
  source: string;
  metadata: Metadata;
}

export interface Metadata {
  notes: string;
  supports_tool_choice: boolean;
}

export interface GeminiGeminiExp1206 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  tpm: number;
  rpm: number;
  source: string;
  metadata: Metadata2;
}

export interface Metadata2 {
  notes: string;
  supports_tool_choice: boolean;
}

export interface GeminiGemini15FlashExp0827 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  tpm: number;
  rpm: number;
  source: string;
  supports_tool_choice: boolean;
}

export interface GeminiGemini15Flash8bExp0827 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  tpm: number;
  rpm: number;
  source: string;
  supports_tool_choice: boolean;
}

export interface GeminiGeminiPro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  rpd: number;
  tpm: number;
  rpm: number;
  source: string;
  supports_tool_choice: boolean;
}

export interface GeminiGemini15Pro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  tpm: number;
  rpm: number;
  source: string;
}

export interface GeminiGemini15Pro002 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  supports_prompt_caching: boolean;
  tpm: number;
  rpm: number;
  source: string;
  deprecation_date: string;
}

export interface GeminiGemini15Pro001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  supports_prompt_caching: boolean;
  tpm: number;
  rpm: number;
  source: string;
  deprecation_date: string;
}

export interface GeminiGemini15ProExp0801 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  tpm: number;
  rpm: number;
  source: string;
}

export interface GeminiGemini15ProExp0827 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  tpm: number;
  rpm: number;
  source: string;
}

export interface GeminiGemini15ProLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  tpm: number;
  rpm: number;
  source: string;
}

export interface GeminiGeminiProVision {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_above_128k_tokens: number;
  output_cost_per_token: number;
  output_cost_per_token_above_128k_tokens: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  rpd: number;
  tpm: number;
  rpm: number;
  source: string;
  supports_tool_choice: boolean;
}

export interface GeminiGeminiGemma227bIt {
  max_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface GeminiGeminiGemma29bIt {
  max_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface CommandA032025 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface CommandR {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface CommandR082024 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface CommandR7b122024 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface CommandLight {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface CommandRPlus {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface CommandRPlus082024 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface CommandNightly {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Command {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface RerankV35 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface RerankEnglishV30 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface RerankMultilingualV30 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface RerankEnglishV20 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface RerankMultilingualV20 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface EmbedEnglishLightV30 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface EmbedMultilingualV30 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_embedding_image_input: boolean;
  mode: string;
}

export interface EmbedEnglishV20 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface EmbedEnglishLightV20 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface EmbedMultilingualV20 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface EmbedEnglishV30 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  input_cost_per_image: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_image_input: boolean;
  supports_embedding_image_input: boolean;
  metadata: Metadata3;
}

export interface Metadata3 {
  notes: string;
}

export interface ReplicateMetaLlama213b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMetaLlama213bChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMetaLlama270b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMetaLlama270bChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMetaLlama27b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMetaLlama27bChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMetaLlama370b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMetaLlama370bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMetaLlama38b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMetaLlama38bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMistralaiMistral7bV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMistralaiMistral7bInstructV02 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface ReplicateMistralaiMixtral8x7bInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterDeepseekDeepseekR10528 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_cache_hit: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
  supports_prompt_caching: boolean;
}

export interface OpenrouterDeepseekDeepseekR1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_cache_hit: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
  supports_prompt_caching: boolean;
}

export interface OpenrouterDeepseekDeepseekChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_prompt_caching: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterDeepseekDeepseekCoder {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_prompt_caching: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMicrosoftWizardlm28x22bNitro {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterGoogleGemini25Pro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterGoogleGeminiPro15 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterGoogleGemini20Flash001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterGoogleGemini25Flash {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_images_per_prompt: number;
  max_videos_per_prompt: number;
  max_video_length: number;
  max_audio_length_hours: number;
  max_audio_per_prompt: number;
  max_pdf_size_mb: number;
  input_cost_per_audio_token: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  supports_audio_output: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterMistralaiMixtral8x22bInstruct {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterCohereCommandRPlus {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterDatabricksDbrxInstruct {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude3Haiku {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude35Haiku {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude3Haiku20240307 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude35Haiku20241022 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  tool_use_system_prompt_tokens: number;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude35Sonnet {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude35SonnetBeta {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude37Sonnet {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude37SonnetBeta {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  tool_use_system_prompt_tokens: number;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude3Sonnet {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaudeSonnet4 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_reasoning: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterMistralaiMistralLarge {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMistralaiMistralSmall3124bInstruct {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMistralaiMistralSmall3224bInstruct {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterCognitivecomputationsDolphinMixtral8x7b {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterGoogleGeminiProVision {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterFireworksFirellava13b {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMetaLlamaLlama38bInstructFree {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMetaLlamaLlama38bInstructExtended {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMetaLlamaLlama370bInstructNitro {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMetaLlamaLlama370bInstruct {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiO1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_prompt_caching: boolean;
  supports_system_messages: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiO1Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiO1Mini20240912 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiO1Preview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiO1Preview20240912 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiO3Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_reasoning: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiO3MiniHigh {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_reasoning: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiGpt4o {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiGpt4o20240513 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiGpt4VisionPreview {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_image: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiGpt35Turbo {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiGpt35Turbo16k {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterOpenaiGpt4 {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaudeInstantV1 {
  max_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude2 {
  max_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterAnthropicClaude3Opus {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_tool_choice: boolean;
}

export interface OpenrouterGooglePalm2ChatBison {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterGooglePalm2CodechatBison {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMetaLlamaLlama213bChat {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMetaLlamaLlama270bChat {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMetaLlamaCodellama34bInstruct {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterNousresearchNousHermesLlama213b {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMancerWeaver {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterGrypheMythomaxL213b {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterJondurbinAiroborosL270b21 {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterUndi95RemmSlerpL213b {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterPygmalionaiMythalion13b {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMistralaiMistral7bInstruct {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterMistralaiMistral7bInstructFree {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface OpenrouterQwenQwen25Coder32bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface J2Ultra {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Jamba15Mini001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Jamba15Large001 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Jamba15 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Jamba15Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Jamba15Large {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface JambaLarge16 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface JambaLarge17 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface JambaMini16 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface JambaMini17 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface J2Mid {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface J2Light {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Dolphin {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Chatdolphin {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface LuminousBase {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface LuminousBaseControl {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface LuminousExtended {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface LuminousExtendedControl {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface LuminousSupreme {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface LuminousSupremeControl {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Ai21J2MidV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Ai21J2UltraV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Ai21JambaInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_system_messages: boolean;
}

export interface Ai21Jamba15LargeV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface Ai21Jamba15MiniV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AmazonRerankV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  max_document_chunks_per_query: number;
  max_tokens_per_document_chunk: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AmazonTitanTextLiteV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AmazonTitanTextExpressV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AmazonTitanTextPremierV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AmazonTitanEmbedTextV1 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AmazonTitanEmbedTextV20 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AmazonTitanEmbedImageV1 {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  input_cost_per_image: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_image_input: boolean;
  supports_embedding_image_input: boolean;
  mode: string;
  source: string;
  metadata: Metadata4;
}

export interface Metadata4 {
  notes: string;
}

export interface MistralMistral7bInstructV02 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface MistralMixtral8x7bInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface MistralMistralLarge2402V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface MistralMistralLarge2407V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface MistralMistralSmall2402V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface EuMistralPixtralLarge2502V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface UsMistralPixtralLarge2502V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest2MistralMixtral8x7bInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast1MistralMixtral8x7bInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuWest3MistralMixtral8x7bInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest2MistralMistral7bInstructV02 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast1MistralMistral7bInstructV02 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuWest3MistralMistral7bInstructV02 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast1MistralMistralLarge2402V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface BedrockUsWest2MistralMistralLarge2402V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface BedrockEuWest3MistralMistralLarge2402V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface AmazonNovaMicroV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface UsAmazonNovaMicroV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface EuAmazonNovaMicroV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface AmazonNovaLiteV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface UsAmazonNovaLiteV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface EuAmazonNovaLiteV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface AmazonNovaProV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface UsAmazonNovaProV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface N1024X102450StepsBedrockAmazonNovaCanvasV10 {
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface EuAmazonNovaProV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  source: string;
}

export interface ApacAmazonNovaMicroV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface ApacAmazonNovaLiteV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface ApacAmazonNovaProV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface UsAmazonNovaPremierV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
}

export interface AnthropicClaude3Sonnet20240229V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface BedrockInvokeAnthropicClaude35Sonnet20240620V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
  metadata: Metadata5;
}

export interface Metadata5 {
  notes: string;
}

export interface AnthropicClaude35Sonnet20240620V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface AnthropicClaudeOpus420250514V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery23;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery23 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface AnthropicClaudeSonnet420250514V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery24;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery24 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface AnthropicClaude37Sonnet20250219V10 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_pdf_input: boolean;
  supports_reasoning: boolean;
  supports_tool_choice: boolean;
}

export interface AnthropicClaude35Sonnet20241022V20 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface AnthropicClaude3Haiku20240307V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface AnthropicClaude35Haiku20241022V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_prompt_caching: boolean;
  supports_tool_choice: boolean;
}

export interface AnthropicClaude3Opus20240229V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface UsAnthropicClaude3Sonnet20240229V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface UsAnthropicClaude35Sonnet20240620V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface UsAnthropicClaude35Sonnet20241022V20 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface UsAnthropicClaude37Sonnet20250219V10 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
}

export interface UsAnthropicClaudeOpus420250514V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery25;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery25 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface UsAnthropicClaudeSonnet420250514V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery26;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery26 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface UsAnthropicClaude3Haiku20240307V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface UsAnthropicClaude35Haiku20241022V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_function_calling: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface UsAnthropicClaude3Opus20240229V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface EuAnthropicClaude3Sonnet20240229V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface EuAnthropicClaude35Sonnet20240620V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface EuAnthropicClaude35Sonnet20241022V20 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface EuAnthropicClaude37Sonnet20250219V10 {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
}

export interface EuAnthropicClaude3Haiku20240307V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface EuAnthropicClaudeOpus420250514V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery27;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery27 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface EuAnthropicClaudeSonnet420250514V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery28;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery28 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface ApacAnthropicClaude3Haiku20240307V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface ApacAnthropicClaude3Sonnet20240229V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface ApacAnthropicClaude35Sonnet20240620V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_pdf_input: boolean;
  supports_tool_choice: boolean;
}

export interface ApacAnthropicClaude35Sonnet20241022V20 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_assistant_prefill: boolean;
  supports_computer_use: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface ApacAnthropicClaudeSonnet420250514V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery29;
  cache_creation_input_token_cost: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  tool_use_system_prompt_tokens: number;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  supports_computer_use: boolean;
}

export interface SearchContextCostPerQuery29 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface EuAnthropicClaude35Haiku20241022V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_assistant_prefill: boolean;
  supports_pdf_input: boolean;
  supports_prompt_caching: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
}

export interface EuAnthropicClaude3Opus20240229V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  supports_tool_choice: boolean;
}

export interface AnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockUsEast1AnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest2AnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast1AnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast11MonthCommitmentAnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockApNortheast16MonthCommitmentAnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockEuCentral1AnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockEuCentral11MonthCommitmentAnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockEuCentral16MonthCommitmentAnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockUsEast11MonthCommitmentAnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockUsEast16MonthCommitmentAnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockUsWest21MonthCommitmentAnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockUsWest26MonthCommitmentAnthropicClaudeV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
}

export interface AnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast1AnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest2AnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast1AnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast11MonthCommitmentAnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast16MonthCommitmentAnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuCentral1AnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuCentral11MonthCommitmentAnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuCentral16MonthCommitmentAnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast11MonthCommitmentAnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast16MonthCommitmentAnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest21MonthCommitmentAnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest26MonthCommitmentAnthropicClaudeV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface AnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast1AnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest2AnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast1AnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast11MonthCommitmentAnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast16MonthCommitmentAnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuCentral1AnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuCentral11MonthCommitmentAnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuCentral16MonthCommitmentAnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast11MonthCommitmentAnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast16MonthCommitmentAnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest21MonthCommitmentAnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest26MonthCommitmentAnthropicClaudeV21 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface AnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast1AnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast11MonthCommitmentAnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsEast16MonthCommitmentAnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest21MonthCommitmentAnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest26MonthCommitmentAnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockUsWest2AnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast1AnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast11MonthCommitmentAnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockApNortheast16MonthCommitmentAnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuCentral1AnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuCentral11MonthCommitmentAnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface BedrockEuCentral16MonthCommitmentAnthropicClaudeInstantV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface CohereRerankV350 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  max_document_chunks_per_query: number;
  max_tokens_per_document_chunk: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface CohereCommandTextV14 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Bedrock1MonthCommitmentCohereCommandTextV14 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Bedrock6MonthCommitmentCohereCommandTextV14 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface CohereCommandLightTextV14 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Bedrock1MonthCommitmentCohereCommandLightTextV14 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Bedrock6MonthCommitmentCohereCommandLightTextV14 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface CohereCommandRPlusV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface CohereCommandRV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface CohereEmbedEnglishV3 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_embedding_image_input: boolean;
}

export interface CohereEmbedMultilingualV3 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_embedding_image_input: boolean;
}

export interface UsDeepseekR1V10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface MetaLlama3370bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface MetaLlama213bChatV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface MetaLlama270bChatV1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface MetaLlama38bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockUsEast1MetaLlama38bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockUsWest1MetaLlama38bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockApSouth1MetaLlama38bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockCaCentral1MetaLlama38bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockEuWest1MetaLlama38bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockEuWest2MetaLlama38bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockSaEast1MetaLlama38bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface MetaLlama370bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockUsEast1MetaLlama370bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockUsWest1MetaLlama370bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockApSouth1MetaLlama370bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockCaCentral1MetaLlama370bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockEuWest1MetaLlama370bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockEuWest2MetaLlama370bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface BedrockSaEast1MetaLlama370bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface MetaLlama318bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface UsMetaLlama318bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface MetaLlama3170bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface UsMetaLlama3170bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface MetaLlama31405bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface UsMetaLlama31405bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface MetaLlama321bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface UsMetaLlama321bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface EuMetaLlama321bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface MetaLlama323bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface UsMetaLlama323bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface EuMetaLlama323bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface MetaLlama3211bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_vision: boolean;
}

export interface UsMetaLlama3211bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_vision: boolean;
}

export interface MetaLlama3290bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_vision: boolean;
}

export interface UsMetaLlama3290bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_vision: boolean;
}

export interface UsMetaLlama3370bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface MetaLlama4Maverick17bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface UsMetaLlama4Maverick17bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface MetaLlama4Scout17bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface UsMetaLlama4Scout17bInstructV10 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_cost_per_token_batches: number;
  output_cost_per_token: number;
  output_cost_per_token_batches: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supported_modalities: string[];
  supported_output_modalities: string[];
}

export interface N512X51250StepsStabilityStableDiffusionXlV0 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface N512X512MaxStepsStabilityStableDiffusionXlV0 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface MaxXMax50StepsStabilityStableDiffusionXlV0 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface MaxXMaxMaxStepsStabilityStableDiffusionXlV0 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface N1024X102450StepsStabilityStableDiffusionXlV1 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface N1024X1024MaxStepsStabilityStableDiffusionXlV1 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface StabilitySd3LargeV10 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface StabilitySd35LargeV10 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface StabilityStableImageCoreV10 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface StabilityStableImageCoreV11 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface StabilityStableImageUltraV10 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface StabilityStableImageUltraV11 {
  max_tokens: number;
  max_input_tokens: number;
  output_cost_per_image: number;
  litellm_provider: string;
  mode: string;
}

export interface SagemakerMetaTextgenerationLlama27b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface SagemakerMetaTextgenerationLlama27bF {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface SagemakerMetaTextgenerationLlama213b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface SagemakerMetaTextgenerationLlama213bF {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface SagemakerMetaTextgenerationLlama270b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface SagemakerMetaTextgenerationLlama270bBF {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TogetherAiUpTo4b {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TogetherAi41b8b {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TogetherAi81b21b {
  max_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TogetherAi211b41b {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TogetherAi411b80b {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TogetherAi811b110b {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TogetherAiEmbeddingUpTo150m {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TogetherAiEmbedding151mTo350m {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface TogetherAiMetaLlamaMetaLlama318BInstructTurbo {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMetaLlamaMetaLlama3170BInstructTurbo {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMetaLlamaMetaLlama31405BInstructTurbo {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMetaLlamaLlama3370BInstructTurbo {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMetaLlamaLlama3370BInstructTurboFree {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMistralaiMixtral8x7BInstructV01 {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMistralaiMistral7BInstructV01 {
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_response_schema: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiTogethercomputerCodeLlama34bInstruct {
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMetaLlamaLlama4Maverick17B128EInstructFp8 {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMetaLlamaLlama4Scout17B16EInstruct {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMetaLlamaLlama323BInstructTurbo {
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiQwenQwen257BInstructTurbo {
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiQwenQwen2572BInstructTurbo {
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiDeepseekAiDeepSeekV3 {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiDeepseekAiDeepSeekR1 {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMistralaiMistralSmall24BInstruct2501 {
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  supports_tool_choice: boolean;
}

export interface TogetherAiMoonshotaiKimiK2Instruct {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_parallel_function_calling: boolean;
  mode: string;
  source: string;
}

export interface OllamaCodegemma {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaCodegeex4 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaDeepseekCoderV2Instruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaDeepseekCoderV2Base {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaDeepseekCoderV2LiteInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaDeepseekCoderV2LiteBase {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaInternlm2520bChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaLlama2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaLlama27b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaLlama213b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaLlama270b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaLlama2Uncensored {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaLlama3 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaLlama38b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaLlama370b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaLlama31 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaMistralLargeInstruct2407 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaMistral {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaMistral7BInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaMistral7BInstructV02 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaMixtral8x7BInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaMixtral8x22BInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
}

export interface OllamaCodellama {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaOrcaMini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface OllamaVicuna {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface DeepinfraLizpreciatiorLzlv70bFp16Hf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraGrypheMythoMaxL213b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraMistralaiMistral7BInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraMetaLlamaLlama270bChatHf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraCognitivecomputationsDolphin26Mixtral8x7b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraCodellamaCodeLlama34bInstructHf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraDeepinfraMixtral {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface DeepinfraPhindPhindCodeLlama34BV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraMistralaiMixtral8x7BInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraDeepinfraAiroboros70b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Deepinfra01AiYi34BChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface Deepinfra01AiYi6B200K {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface DeepinfraJondurbinAiroborosL270bGpt4141 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraMetaLlamaLlama213bChatHf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraAmazonMistralLite {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraMetaLlamaLlama27bChatHf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraMetaLlamaMetaLlama38BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraMetaLlamaMetaLlama370BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface DeepinfraMetaLlamaMetaLlama31405BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_tool_choice: boolean;
}

export interface Deepinfra01AiYi34B200K {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface DeepinfraOpenchatOpenchat35 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
}

export interface PerplexityCodellama34bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexityCodellama70bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexityLlama3170bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexityLlama318bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexityLlama31SonarHuge128kOnline {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  deprecation_date: string;
}

export interface PerplexityLlama31SonarLarge128kOnline {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  deprecation_date: string;
}

export interface PerplexityLlama31SonarLarge128kChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  deprecation_date: string;
}

export interface PerplexityLlama31SonarSmall128kChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  deprecation_date: string;
}

export interface PerplexityLlama31SonarSmall128kOnline {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  deprecation_date: string;
}

export interface PerplexityPplx7bChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexityPplx70bChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexityPplx7bOnline {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_request: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexityPplx70bOnline {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_request: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexityLlama270bChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexityMistral7bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexityMixtral8x7bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexitySonarSmallChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexitySonarSmallOnline {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_request: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexitySonarMediumChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexitySonarMediumOnline {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  input_cost_per_request: number;
  litellm_provider: string;
  mode: string;
}

export interface PerplexitySonar {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  search_context_cost_per_query: SearchContextCostPerQuery30;
  supports_web_search: boolean;
}

export interface SearchContextCostPerQuery30 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface PerplexitySonarPro {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  search_context_cost_per_query: SearchContextCostPerQuery31;
  supports_web_search: boolean;
}

export interface SearchContextCostPerQuery31 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface PerplexitySonarReasoning {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  search_context_cost_per_query: SearchContextCostPerQuery32;
  supports_web_search: boolean;
  supports_reasoning: boolean;
}

export interface SearchContextCostPerQuery32 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface PerplexitySonarReasoningPro {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  search_context_cost_per_query: SearchContextCostPerQuery33;
  supports_web_search: boolean;
  supports_reasoning: boolean;
}

export interface SearchContextCostPerQuery33 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface PerplexitySonarDeepResearch {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  output_cost_per_reasoning_token: number;
  citation_cost_per_token: number;
  search_context_cost_per_query: SearchContextCostPerQuery34;
  litellm_provider: string;
  mode: string;
  supports_reasoning: boolean;
  supports_web_search: boolean;
}

export interface SearchContextCostPerQuery34 {
  search_context_size_low: number;
  search_context_size_medium: number;
  search_context_size_high: number;
}

export interface FireworksAiAccountsFireworksModelsLlamaV3p21bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsLlamaV3p23bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsLlamaV3p18bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsLlamaV3p211bVisionInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsLlamaV3p290bVisionInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_tool_choice: boolean;
  supports_vision: boolean;
  supports_response_schema: boolean;
  source: string;
}

export interface FireworksAiAccountsFireworksModelsFirefunctionV2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsMixtral8x22bInstructHf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsQwen272bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsQwen2p5Coder32bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsYiLarge {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsDeepseekCoderV2Instruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsDeepseekV3 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsDeepseekR1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsDeepseekR1Basic {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsDeepseekR10528 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
}

export interface FireworksAiAccountsFireworksModelsLlamaV3p1405bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
  supports_function_calling: boolean;
}

export interface FireworksAiAccountsFireworksModelsLlama4MaverickInstructBasic {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiAccountsFireworksModelsLlama4ScoutInstructBasic {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_response_schema: boolean;
  source: string;
  supports_tool_choice: boolean;
}

export interface FireworksAiNomicAiNomicEmbedTextV15 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface FireworksAiNomicAiNomicEmbedTextV1 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface FireworksAiWhereIsAiUaeLargeV1 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface FireworksAiThenlperGteLarge {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface FireworksAiThenlperGteBase {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface FireworksAiUpTo4b {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
}

export interface FireworksAi41bTo16b {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
}

export interface FireworksAiAbove16b {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
}

export interface FireworksAiMoeUpTo56b {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
}

export interface FireworksAi56bTo176b {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
}

export interface FireworksAiDefault {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
}

export interface FireworksAiEmbeddingUpTo150m {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
}

export interface FireworksAiEmbedding150mTo350m {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
}

export interface AnyscaleMistralaiMistral7BInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
}

export interface AnyscaleMistralaiMixtral8x7BInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
}

export interface AnyscaleMistralaiMixtral8x22BInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  source: string;
}

export interface AnyscaleHuggingFaceH4Zephyr7bBeta {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AnyscaleGoogleGemma7bIt {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface AnyscaleMetaLlamaLlama27bChatHf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AnyscaleMetaLlamaLlama213bChatHf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AnyscaleMetaLlamaLlama270bChatHf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AnyscaleCodellamaCodeLlama34bInstructHf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface AnyscaleCodellamaCodeLlama70bInstructHf {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface AnyscaleMetaLlamaMetaLlama38BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface AnyscaleMetaLlamaMetaLlama370BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface CloudflareCfMetaLlama27bChatFp16 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface CloudflareCfMetaLlama27bChatInt8 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface CloudflareCfMistralMistral7bInstructV01 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface CloudflareHfTheblokeCodellama7bInstructAwq {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface V0V010Md {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface V0V015Md {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface V0V015Lg {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_parallel_function_calling: boolean;
  supports_vision: boolean;
  supports_system_messages: boolean;
  supports_tool_choice: boolean;
}

export interface VoyageVoyage01 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyageLite01 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyageLarge2 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyageFinance2 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyageLite02Instruct {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyageLaw2 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyageCode2 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyage2 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyage3Large {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyage3 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyage3Lite {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyageCode3 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageVoyageMultimodal3 {
  max_tokens: number;
  max_input_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageRerank2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface VoyageRerank2Lite {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_query_tokens: number;
  input_cost_per_token: number;
  input_cost_per_query: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface DatabricksDatabricksClaude37Sonnet {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_db_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata6;
  supports_assistant_prefill: boolean;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
}

export interface Metadata6 {
  notes: string;
}

export interface DatabricksDatabricksMetaLlama31405bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_db_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata7;
  supports_tool_choice: boolean;
}

export interface Metadata7 {
  notes: string;
}

export interface DatabricksDatabricksMetaLlama3170bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata8;
  supports_tool_choice: boolean;
}

export interface Metadata8 {
  notes: string;
}

export interface DatabricksDatabricksMetaLlama3370bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata9;
  supports_tool_choice: boolean;
}

export interface Metadata9 {
  notes: string;
}

export interface DatabricksDatabricksLlama4Maverick {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata10;
  supports_tool_choice: boolean;
}

export interface Metadata10 {
  notes: string;
}

export interface DatabricksDatabricksDbrxInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata11;
  supports_tool_choice: boolean;
}

export interface Metadata11 {
  notes: string;
}

export interface DatabricksDatabricksMetaLlama370bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata12;
  supports_tool_choice: boolean;
}

export interface Metadata12 {
  notes: string;
}

export interface DatabricksDatabricksLlama270bChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata13;
  supports_tool_choice: boolean;
}

export interface Metadata13 {
  notes: string;
}

export interface DatabricksDatabricksMixtral8x7bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata14;
  supports_tool_choice: boolean;
}

export interface Metadata14 {
  notes: string;
}

export interface DatabricksDatabricksMpt30bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata15;
  supports_tool_choice: boolean;
}

export interface Metadata15 {
  notes: string;
}

export interface DatabricksDatabricksMpt7bInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata16;
  supports_tool_choice: boolean;
}

export interface Metadata16 {
  notes: string;
}

export interface DatabricksDatabricksBgeLargeEn {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata17;
}

export interface Metadata17 {
  notes: string;
}

export interface DatabricksDatabricksGteLargeEn {
  max_tokens: number;
  max_input_tokens: number;
  output_vector_size: number;
  input_cost_per_token: number;
  input_dbu_cost_per_token: number;
  output_cost_per_token: number;
  output_dbu_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata18;
}

export interface Metadata18 {
  notes: string;
}

export interface SambanovaMetaLlama318BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
}

export interface SambanovaMetaLlama31405BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
}

export interface SambanovaMetaLlama321BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface SambanovaMetaLlama323BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface SambanovaLlama4Maverick17B128EInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  supports_vision: boolean;
  source: string;
  metadata: Metadata19;
}

export interface Metadata19 {
  notes: string;
}

export interface SambanovaLlama4Scout17B16EInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_response_schema: boolean;
  source: string;
  metadata: Metadata20;
}

export interface Metadata20 {
  notes: string;
}

export interface SambanovaMetaLlama3370BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_response_schema: boolean;
  supports_tool_choice: boolean;
  source: string;
}

export interface SambanovaMetaLlamaGuard38B {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface SambanovaQwen332B {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  mode: string;
  source: string;
}

export interface SambanovaQwQ32B {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface SambanovaQwen2Audio7BInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_audio_input: boolean;
  source: string;
}

export interface SambanovaDeepSeekR1DistillLlama70B {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface SambanovaDeepSeekR1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface SambanovaDeepSeekV30324 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  source: string;
}

export interface AssemblyaiNano {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
}

export interface AssemblyaiBest {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
}

export interface JinaRerankerV2BaseMultilingual {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  max_document_chunks_per_query: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeDeepseekR1 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_reasoning: boolean;
  mode: string;
}

export interface SnowflakeSnowflakeArctic {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeClaude35Sonnet {
  supports_computer_use: boolean;
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeMistralLarge {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeMistralLarge2 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeRekaFlash {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeRekaCore {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeJambaInstruct {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeJamba15Mini {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeJamba15Large {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeMixtral8x7b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeLlama270bChat {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeLlama38b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeLlama370b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeLlama318b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeLlama3170b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeLlama3370b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeSnowflakeLlama3370b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeLlama31405b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeSnowflakeLlama31405b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeLlama321b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeLlama323b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeMistral7b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface SnowflakeGemma7b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface NscaleMetaLlamaLlama4Scout17B16EInstruct {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface NscaleQwenQwen25Coder3BInstruct {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface NscaleQwenQwen25Coder7BInstruct {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface NscaleQwenQwen25Coder32BInstruct {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface NscaleQwenQwQ32B {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
}

export interface NscaleDeepseekAiDeepSeekR1DistillLlama70B {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata21;
}

export interface Metadata21 {
  notes: string;
}

export interface NscaleDeepseekAiDeepSeekR1DistillLlama8B {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata22;
}

export interface Metadata22 {
  notes: string;
}

export interface NscaleDeepseekAiDeepSeekR1DistillQwen15B {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata23;
}

export interface Metadata23 {
  notes: string;
}

export interface NscaleDeepseekAiDeepSeekR1DistillQwen7B {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata24;
}

export interface Metadata24 {
  notes: string;
}

export interface NscaleDeepseekAiDeepSeekR1DistillQwen14B {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata25;
}

export interface Metadata25 {
  notes: string;
}

export interface NscaleDeepseekAiDeepSeekR1DistillQwen32B {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata26;
}

export interface Metadata26 {
  notes: string;
}

export interface NscaleMistralaiMixtral8x22bInstructV01 {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata27;
}

export interface Metadata27 {
  notes: string;
}

export interface NscaleMetaLlamaLlama318BInstruct {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata28;
}

export interface Metadata28 {
  notes: string;
}

export interface NscaleMetaLlamaLlama3370BInstruct {
  input_cost_per_token: number;
  output_cost_per_token: number;
  litellm_provider: string;
  mode: string;
  source: string;
  metadata: Metadata29;
}

export interface Metadata29 {
  notes: string;
}

export interface NscaleBlackForestLabsFlux1Schnell {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
}

export interface NscaleStabilityaiStableDiffusionXlBase10 {
  mode: string;
  input_cost_per_pixel: number;
  output_cost_per_pixel: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
}

export interface FeatherlessAiFeatherlessAiQwerky72B {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface FeatherlessAiFeatherlessAiQwerkyQwQ32B {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  mode: string;
}

export interface DeepgramNova3 {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata30;
}

export interface Metadata30 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova3General {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata31;
}

export interface Metadata31 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova3Medical {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata32;
}

export interface Metadata32 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2 {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata33;
}

export interface Metadata33 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2General {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata34;
}

export interface Metadata34 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2Meeting {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata35;
}

export interface Metadata35 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2Phonecall {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata36;
}

export interface Metadata36 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2Voicemail {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata37;
}

export interface Metadata37 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2Finance {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata38;
}

export interface Metadata38 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2Conversationalai {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata39;
}

export interface Metadata39 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2Video {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata40;
}

export interface Metadata40 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2Drivethru {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata41;
}

export interface Metadata41 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2Automotive {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata42;
}

export interface Metadata42 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova2Atc {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata43;
}

export interface Metadata43 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNova {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata44;
}

export interface Metadata44 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNovaGeneral {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata45;
}

export interface Metadata45 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramNovaPhonecall {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata46;
}

export interface Metadata46 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramEnhanced {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata47;
}

export interface Metadata47 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramEnhancedGeneral {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata48;
}

export interface Metadata48 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramEnhancedMeeting {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata49;
}

export interface Metadata49 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramEnhancedPhonecall {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata50;
}

export interface Metadata50 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramEnhancedFinance {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata51;
}

export interface Metadata51 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramBase {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata52;
}

export interface Metadata52 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramBaseGeneral {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata53;
}

export interface Metadata53 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramBaseMeeting {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata54;
}

export interface Metadata54 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramBasePhonecall {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata55;
}

export interface Metadata55 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramBaseVoicemail {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata56;
}

export interface Metadata56 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramBaseFinance {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata57;
}

export interface Metadata57 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramBaseConversationalai {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata58;
}

export interface Metadata58 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramBaseVideo {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata59;
}

export interface Metadata59 {
  original_pricing_per_minute: number;
  calculation: string;
}

export interface DeepgramWhisper {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata60;
}

export interface Metadata60 {
  notes: string;
}

export interface DeepgramWhisperTiny {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata61;
}

export interface Metadata61 {
  notes: string;
}

export interface DeepgramWhisperBase {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata62;
}

export interface Metadata62 {
  notes: string;
}

export interface DeepgramWhisperSmall {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata63;
}

export interface Metadata63 {
  notes: string;
}

export interface DeepgramWhisperMedium {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata64;
}

export interface Metadata64 {
  notes: string;
}

export interface DeepgramWhisperLarge {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata65;
}

export interface Metadata65 {
  notes: string;
}

export interface ElevenlabsScribeV1 {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata66;
}

export interface Metadata66 {
  original_pricing_per_hour: number;
  calculation: string;
  notes: string;
}

export interface ElevenlabsScribeV1Experimental {
  mode: string;
  input_cost_per_second: number;
  output_cost_per_second: number;
  litellm_provider: string;
  supported_endpoints: string[];
  source: string;
  metadata: Metadata67;
}

export interface Metadata67 {
  original_pricing_per_hour: number;
  calculation: string;
  notes: string;
}

export interface DashscopeQwenMax {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  mode: string;
  source: string;
}

export interface DashscopeQwenPlusLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  mode: string;
  source: string;
}

export interface DashscopeQwenTurboLatest {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  mode: string;
  source: string;
}

export interface DashscopeQwen330bA3b {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_reasoning: boolean;
  mode: string;
  source: string;
}

export interface MoonshotMoonshotV18k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  mode: string;
  source: string;
}

export interface MoonshotMoonshotV132k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  mode: string;
  source: string;
}

export interface MoonshotMoonshotV1128k {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  mode: string;
  source: string;
}

export interface MoonshotMoonshotV1Auto {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  mode: string;
  source: string;
}

export interface MoonshotKimiK20711Preview {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  input_cost_per_token: number;
  output_cost_per_token: number;
  cache_read_input_token_cost: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  supports_web_search: boolean;
  mode: string;
  source: string;
}

export interface MoonshotMoonshotV132k0430 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  mode: string;
  source: string;
}

export interface MoonshotMoonshotV1128k0430 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  mode: string;
  source: string;
}

export interface MoonshotMoonshotV18k0430 {
  max_tokens: number;
  max_input_tokens: number;
  max_output_tokens: number;
  litellm_provider: string;
  supports_function_calling: boolean;
  supports_tool_choice: boolean;
  mode: string;
  source: string;
}
